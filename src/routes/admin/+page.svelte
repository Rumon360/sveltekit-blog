<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
	import { get_all_posts } from './posts.remote';

	const posts = await get_all_posts();
</script>

<div class="pt-12">
	<div class="mb-12 flex w-full flex-col justify-between gap-6 sm:flex-row">
		<div>
			<h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Welcome back</h1>
			<p class="mt-2 text-zinc-400">Here’s all of the blog posts.</p>
		</div>
		<div>
			<Button>
				<a href={resolve('/admin/post/new')}>New Post</a>
			</Button>
		</div>
	</div>
	<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each posts as post (post.id)}
			<li>
				<a
					href={`/post/${post.slug}`}
					class="group block border border-zinc-800 bg-zinc-900/60 p-6 transition
						hover:border-zinc-700 hover:bg-zinc-900"
				>
					<div class="flex items-start justify-between gap-4">
						<div>
							<h2
								class="text-lg font-semibold text-zinc-100 transition
									group-hover:text-white"
							>
								{post.title}
							</h2>

							<p class="mt-1 text-sm text-zinc-400">
								{new Date(post.createdAt).toLocaleDateString()}
							</p>
						</div>

						<span class="mt-1 text-zinc-500 transition group-hover:text-zinc-300"> → </span>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	{#if posts.length === 0}
		<div class="mt-24 text-center text-zinc-500">No posts yet. Start writing ✨</div>
	{/if}
</div>
