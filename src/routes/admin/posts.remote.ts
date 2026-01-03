import { form, getRequestEvent, query } from '$app/server';
import { auth } from '$lib/auth';
import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { slugify } from '$lib/utils';
import { CreatePostSchema, UpdatePostSchema } from '$lib/validators';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as v from 'valibot';

export const get_all_posts = query(async () => {
	return db.query.post.findMany({
		orderBy: (post, { desc }) => desc(post.createdAt)
	});
});

export const get_post_by_id = query(v.string(), async (slug) => {
	return db.query.post.findFirst({ where: (post, { eq }) => eq(post.slug, slug) });
});

export const create_post = form(CreatePostSchema, async ({ title, body }) => {
	const event = getRequestEvent();

	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (!session?.user?.id) {
		error(401, 'Unauthorized');
	}

	const normalizedTitle = title.trim();
	const normalizedBody = body.trim();

	if (!normalizedTitle || !normalizedBody) {
		error(400, 'Title and body are required');
	}

	const slug = slugify(normalizedTitle);

	try {
		await db.insert(post).values({
			title: normalizedTitle,
			body: normalizedBody,
			slug,
			authorId: session.user.id
		});
	} catch (err) {
		console.error('Failed to create post', err);
		error(500, 'Failed to create post');
	}

	redirect(303, '/admin');
});

export const update_post = form(UpdatePostSchema, async ({ slug, title, body }) => {
	const event = getRequestEvent();

	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (!session?.user?.id) {
		error(401, 'Unauthorized');
	}

	const normalizedTitle = title.trim();
	const normalizedBody = body.trim();

	if (!normalizedTitle || !normalizedBody) {
		error(400, 'Title and body are required');
	}

	const regeneratedSlug = slugify(normalizedTitle);

	try {
		await db
			.update(post)
			.set({
				title: normalizedTitle,
				body: normalizedBody,
				slug: regeneratedSlug,
				authorId: session.user.id
			})
			.where(eq(post.slug, slug));
	} catch (err) {
		console.error('Failed to update post', err);
		error(500, 'Failed to update post');
	}

	redirect(303, '/admin');
});
