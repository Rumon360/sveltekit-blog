import * as v from 'valibot';

const CreatePostSchema = v.object({
	title: v.pipe(
		v.string(),
		v.trim(),
		v.nonEmpty('Title is required'),
		v.minLength(3, 'Title must be at least 3 characters'),
		v.maxLength(100, 'Title must be at most 100 characters')
	),
	body: v.pipe(
		v.string(),
		v.trim(),
		v.nonEmpty('Body is required'),
		v.minLength(10, 'Body must be at least 10 characters'),
		v.maxLength(5000, 'Body must be at most 5000 characters')
	)
});

const UpdatePostSchema = v.object({
	slug: v.pipe(v.string(), v.trim(), v.nonEmpty('Slug is required')),
	title: v.pipe(
		v.string(),
		v.trim(),
		v.nonEmpty('Title is required'),
		v.minLength(3, 'Title must be at least 3 characters'),
		v.maxLength(100, 'Title must be at most 100 characters')
	),
	body: v.pipe(
		v.string(),
		v.trim(),
		v.nonEmpty('Body is required'),
		v.minLength(10, 'Body must be at least 10 characters'),
		v.maxLength(5000, 'Body must be at most 5000 characters')
	)
});

export { CreatePostSchema, UpdatePostSchema };
