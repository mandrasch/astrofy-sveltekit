<script lang="ts">
	import HorizontalCard from '$lib/components/HorizontalCard.svelte';
	import type { ProjectGroup } from '$lib/config/projects';
	import { PROJECT_GROUPS, PROJECTS } from '$lib/config/projects';

	// Runes mode
	let {
		featuredOnly = false
	}: {
		/** Show only projects with featured: true (for home page) */
		featuredOnly?: boolean;
	} = $props();

	// ✅ decide which list to render
	const listGroups: ProjectGroup[] = featuredOnly
		? [{ category: 'Featured', items: PROJECTS.filter((p) => p.featured) }]
		: PROJECT_GROUPS;
</script>

{#each listGroups as group}
	{#if !featuredOnly}<h2 class="mt-8 mb-5 text-3xl font-bold">{group.category}</h2>{/if}

	{#each group.items as p, i}
		<HorizontalCard title={p.title} img={p.img} desc={p.desc} url={p.url} badge={p.badge} />
		{#if i < group.items.length - 1}
			<hr class="border-1.5 my-4 border-t border-gray-200" />
		{/if}
	{/each}
{/each}
