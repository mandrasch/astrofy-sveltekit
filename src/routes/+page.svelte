<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { PROJECTS } from '$lib/config/projects';
	import ProjectList from '$lib/components/ProjectList.svelte';

	import createSlug from '$lib/helpers/createSlug';
	import HorizontalCard from '$lib/components/HorizontalCard.svelte';

	let { data } = $props<{ data: { last_posts: any[] } }>();

	// ✅ select only projects with `featured: true`
	const featuredProjects = PROJECTS.filter((p) => p.featured);
</script>

<Hero />

<section class="mt-2">
	<h2 class="mb-2 w-full text-3xl font-bold">Featured projects {'</>'}</h2>

	<!-- ✅ Only featured projects -->
	<ProjectList featuredOnly />

	<div class="mt-6 text-right">
		<a href="/projects" class="text-base font-semibold text-gray-900 underline hover:text-gray-700">
			View all projects →
		</a>
	</div>
</section>

<section class="mt-10">
	<h2 class="mb-5 w-full text-3xl font-bold">Latest posts from my blogs</h2>

	{#each data.last_posts as post, i}
		<HorizontalCard
			title={post.title}
			img={post.heroImage}
			desc={post.description}
			url={'/blog/' + createSlug(post.title, post.slug)}
			target="_self"
			badge={post.badge}
		/>
		{#if i < data.last_posts.length - 1}
			<hr class="my-4 border-t" />
		{/if}
	{/each}
</section>
