<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { authClient } from '$lib/auth-client.js';
	import { goto, invalidate } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';

	let { children, data } = $props();

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					await invalidate('auth:status');
					goto('/');
				}
			}
		});
	};
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container mx-auto w-full px-4 lg:px-0">
	<nav class="flex h-16 w-full items-center justify-between border-b border-zinc-700">
		<a href="/" class="inline-block text-2xl font-bold">SvelteKit Blog</a>
		{#if data.isAuthenticated}
			<Button onclick={handleLogout} class="border border-zinc-300 bg-transparent text-zinc-50">
				Logout
			</Button>
		{/if}
	</nav>
	{@render children()}
</main>
