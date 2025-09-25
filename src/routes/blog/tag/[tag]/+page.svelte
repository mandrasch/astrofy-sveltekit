<script lang="ts">
	import BlogList from '$lib/components/blog/BlogList.svelte';
	let { data } = $props<{
		data: { posts: any[]; nav: { prev: string | null; next: string | null }; heading: string };
	}>();
</script>

<BlogList posts={data.posts} nav={data.nav} title={data.heading} />
