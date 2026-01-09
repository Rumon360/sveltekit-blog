import { getRequestEvent, query } from '$app/server';
import { auth } from '$lib/auth';

export const get_user = query(async () => {
	const event = getRequestEvent();

	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (!session?.user) {
		return null;
	}

	return {
		id: session?.user.id,
		name: session?.user.name,
		email: session?.user.email,
		role: session?.user.role
	};
});
