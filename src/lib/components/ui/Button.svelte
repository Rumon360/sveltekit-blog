<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		type?: 'button' | 'submit' | 'reset';

		children?: import('svelte').Snippet;
	}

	let {
		type = 'button',
		disabled = false,
		class: className = '',
		onclick,
		children,
		...rest
	}: Props = $props();
</script>

<button
	{type}
	{disabled}
	{onclick}
	{...rest}
	class={cn(
		'inline-flex items-center justify-center bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
>
	{@render children?.()}
</button>
