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

<main class="w-full">
	<nav class="sticky top-0 h-16 w-full border-b border-zinc-700 backdrop-blur-sm">
		<div class="container mx-auto flex h-full w-full items-center justify-between px-4 lg:px-0">
			<a href="/" class="inline-block text-xl font-bold lg:text-2xl">SvelteKit Blog</a>
			{#if user}
				<LogoutButton />
			{/if}
		</div>
	</nav>
	<div class="container mx-auto w-full px-4 lg:px-0">
		{@render children()}
	</div>
</main>
