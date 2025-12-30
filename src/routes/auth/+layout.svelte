<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Auth - SvelteKit Blog</title>
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center">
	{@render children()}
</div>
