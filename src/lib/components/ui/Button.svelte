<script lang="ts">
	import { cn } from '$lib/utils';

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;

	$: className = $$restProps.class || '';
</script>

<button
	{type}
	{disabled}
	{...$$restProps}
	class={cn(
		'inline-flex items-center justify-center bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
>
	<slot />
</button>
