<script lang="ts">
	import { SOCIALS } from '$lib/config/config';

	let {
		className,
		items = SOCIALS
	}: {
		className?: string;
		items?: { id: string; href: string; label: string; svg: string }[];
	} = $props();
</script>

<!-- spacer -->
<div
	class="pointer-events-none h-12 w-full [mask-image:linear-gradient(transparent,#000)] md:hidden"
	aria-hidden="true"
/>

<div class={`sticky bottom-0 w-full overflow-x-hidden bg-gray-100 ${className ?? ''}`}>
	<div class="flex flex-wrap items-center justify-center gap-4 px-4 py-3">
		{#each items as it}
			<a
				href={it.href}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex rounded p-2 hover:bg-gray-200 focus:ring focus:outline-none"
				aria-label={it.label}
				title={it.label}
			>
				{@html it.svg}
			</a>
		{/each}
	</div>
</div>
