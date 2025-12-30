<script lang="ts">
	import Input from '$lib/components/ui/Input.svelte';
	import Label from '$lib/components/ui/Label.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';

	let loading = $state(false);
	let error = $state('');

	let errors = $state<{
		username?: string;
		email?: string;
		password?: string;
		password_confirm?: string;
	}>({});

	async function signup(e: Event) {
		e.preventDefault();
		error = '';
		errors = {};

		const form = e.target as HTMLFormElement;

		const name = form.username.value.trim();
		const email = form.email.value.trim();
		const password = form.password.value;
		const password_confirm = form.password_confirm.value;

		if (!name) errors.username = 'Name is required';
		if (!email) errors.email = 'Email is required';
		if (!password) errors.password = 'Password is required';
		if (!password_confirm) errors.password_confirm = 'Please confirm your password';

		if (password && password_confirm && password !== password_confirm) {
			errors.password_confirm = 'Passwords do not match';
		}

		if (Object.keys(errors).length > 0) return;

		try {
			loading = true;
			await authClient.signUp.email(
				{
					name,
					email,
					password
				},
				{
					onSuccess: () => {
						goto('/');
					},
					onError: (err) => {
						error = err?.error?.message ?? 'An error occurred during signup.';
					}
				}
			);
		} catch (err) {
			error = 'Failed to create account. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<div class="w-xl border border-zinc-800 bg-zinc-900 p-6">
	<h1 class="pb-6 text-2xl font-semibold">Register Now</h1>

	<form onsubmit={signup} class="space-y-4">
		<div class="grid gap-2">
			<Label forId="username">Name</Label>
			<Input
				autoComplete="username"
				id="username"
				name="username"
				type="text"
				placeholder="John Doe"
			/>
			{#if errors.username}
				<p class="text-sm text-red-500">{errors.username}</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<Label forId="email">Email</Label>
			<Input
				autoComplete="email"
				id="email"
				name="email"
				type="email"
				placeholder="you@example.com"
			/>
			{#if errors.email}
				<p class="text-sm text-red-500">{errors.email}</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<Label forId="password">Password</Label>
			<Input
				autoComplete="new-password"
				id="password"
				name="password"
				type="password"
				placeHolder="Type your password"
			/>
			{#if errors.password}
				<p class="text-sm text-red-500">{errors.password}</p>
			{/if}
		</div>

		<div class="grid gap-2">
			<Label forId="password_confirm">Confirm Password</Label>
			<Input
				autoComplete="off"
				id="password_confirm"
				name="password_confirm"
				type="password"
				placeHolder="Confirm your password"
			/>
			{#if errors.password_confirm}
				<p class="text-sm text-red-500">{errors.password_confirm}</p>
			{/if}
		</div>

		{#if error}
			<p class="text-sm text-red-500">{error}</p>
		{/if}

		<div class="pt-2">
			<Button type="submit" disabled={loading}>
				{loading ? 'Signing up…' : 'Sign up'}
			</Button>
		</div>

		<div class="pt-4 text-sm text-zinc-400">
			Already have an account?
			<button
				type="button"
				class="ml-1 text-blue-500 hover:underline"
				onclick={() => goto('/auth/login')}
			>
				Log in
			</button>
		</div>
	</form>
</div>
