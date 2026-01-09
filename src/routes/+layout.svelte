<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import { get_user } from './user.remote.js';

	let { children } = $props();

	const user = $derived(await get_user());
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container mx-auto w-full px-4 lg:px-0">
	<nav class="flex h-16 w-full items-center justify-between border-b border-zinc-700">
		<a href="/" class="inline-block text-2xl font-bold">SvelteKit Blog</a>
		{#if user}
			<LogoutButton />
		{/if}
	</nav>
	{@render children()}
</main>
