export const load = async ({ depends, locals }) => {
	depends('auth:status');

	return {
		isAuthenticated: !!locals.user?.id
	};
};
