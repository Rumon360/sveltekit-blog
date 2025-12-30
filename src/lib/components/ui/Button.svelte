<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button
	{type}
	{disabled}
	class="
		inline-flex items-center justify-center
		bg-zinc-100
		px-4 py-2
		text-sm font-medium
		text-zinc-900
		disabled:cursor-not-allowed
		disabled:opacity-50
	"
>
	<slot />
</button>
