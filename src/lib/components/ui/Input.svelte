<script lang="ts">
	export let id: string;
	export let name: string;
	export let type: string = 'text';
	export let value: string = '';
</script>

<input bind:value {id} {name} {type} class="input-field" {...$$restProps} />
