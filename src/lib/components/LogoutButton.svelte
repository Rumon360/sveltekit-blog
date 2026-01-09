<script lang="ts">
	import { authClient } from '$lib/auth-client.js';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import { get_user } from '../../routes/user.remote';
	import { resolve } from '$app/paths';

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					await get_user().refresh();
					await goto(resolve('/auth/login'));
				}
			}
		});
	};
</script>

<Button onclick={handleLogout} class="border border-zinc-300 bg-transparent text-zinc-50">
	Logout
</Button>
