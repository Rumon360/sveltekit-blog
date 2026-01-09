<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Label from '$lib/components/ui/Label.svelte';
	import { get_post_by_id, update_post } from '../../admin/posts.remote';

	import { get_user } from '../../user.remote';

	const post = await get_post_by_id(page.params.slug!);

	const user = $derived(await get_user());

	let isEditing = $state(false);
</script>

{#if post}
	<div class="pt-6 lg:pt-12">
		<div class="flex w-full justify-between">
			<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance lg:text-4xl">
				{post.title}
			</h1>
			{#if user?.role === 'admin'}
				<Button onclick={() => (isEditing = !isEditing)} class="bg-transparent p-0 text-zinc-50">
					{isEditing ? 'Cancel' : 'Edit'}
				</Button>
			{/if}
		</div>
		{#if isEditing}
			<form {...update_post} class="pt-12">
				<input {...update_post.fields.slug.as('text')} hidden value={post?.slug} />
				<div class="space-y-4">
					<div class="grid gap-2">
						<Label forId="title">Title</Label>
						<input
							class="input-field"
							placeholder="Give a title"
							{...update_post.fields.title.as('text')}
							value={post?.title}
						/>
						{#each update_post.fields.title.issues() as issue (issue.message)}
							<p class="text-sm text-red-500">{issue.message}</p>
						{/each}
					</div>
					<div class="grid gap-2">
						<Label forId="body">Body</Label>
						<textarea
							placeholder="Write your blog here..."
							class="input-field"
							rows="6"
							{...update_post.fields.body.as('text')}
							value={post?.body}
						></textarea>
						{#each update_post.fields.body.issues() as issue (issue.message)}
							<p class="text-sm text-red-500">{issue.message}</p>
						{/each}
					</div>
					<div>
						<Button type="submit">Update</Button>
					</div>
				</div>
			</form>
		{:else}
			<div class="prose max-w-none pt-6 leading-loose">
				{@html post.body}
			</div>
		{/if}
	</div>
{/if}
