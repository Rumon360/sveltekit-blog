<script lang="ts">
	export let id: string;
	export let name: string;
	export let type: string = 'text';
	export let value: string = '';
</script>

<input
	bind:value
	{id}
	{name}
	{type}
	class="
		w-full
		border border-zinc-700
		bg-zinc-900
		px-3 py-2
		text-sm text-zinc-100
		transition
		outline-none
		placeholder:text-zinc-500
		focus:border-zinc-500
		focus:ring-1 focus:ring-zinc-500
	"
	{...$$restProps}
/>
