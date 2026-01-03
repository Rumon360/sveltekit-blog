import { query } from '$app/server';
import { db } from '$lib/server/db';

export const get_all_posts = query(() => {
	return db.query.post.findMany();
});
