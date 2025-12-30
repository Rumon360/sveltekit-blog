<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>SvelteKit Blog</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container mx-auto w-full px-4 lg:px-0">
	{@render children()}
</main>
