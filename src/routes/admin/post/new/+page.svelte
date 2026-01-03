<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Label from '$lib/components/ui/Label.svelte';
	import { create_post } from '../../posts.remote';
</script>

<form {...create_post} class="pt-12">
	<h1 class="pb-6 text-2xl font-semibold">Create a Post</h1>
	<div class="space-y-4">
		<div class="grid gap-2">
			<Label forId="title">Title</Label>
			<input
				class="input-field"
				placeholder="Give a title"
				{...create_post.fields.title.as('text')}
			/>
			{#each create_post.fields.title.issues() as issue (issue.message)}
				<p class="text-sm text-red-500">{issue.message}</p>
			{/each}
		</div>
		<div class="grid gap-2">
			<Label forId="body">Body</Label>
			<textarea
				placeholder="Write your blog here..."
				class="input-field"
				rows="6"
				{...create_post.fields.body.as('text')}
			></textarea>
			{#each create_post.fields.body.issues() as issue (issue.message)}
				<p class="text-sm text-red-500">{issue.message}</p>
			{/each}
		</div>
		<Button type="submit">Create</Button>
	</div>
</form>
