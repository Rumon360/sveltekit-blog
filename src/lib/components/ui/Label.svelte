<script lang="ts">
	export let forId: string;
</script>

<label for={forId} class="text-sm font-medium text-zinc-400">
	<slot />
</label>
