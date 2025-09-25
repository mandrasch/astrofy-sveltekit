<script lang="ts">
	export type Entry = { title: string; subtitle: string; body?: string };
	let { items }: { items: Entry[] } = $props();
</script>

<ul class="space-y-6">
	{#each items as e, i}
		<li class="flex">
			<!-- left rail -->
			<div class="relative mr-5">
				<!-- dot -->
				<span
					class="relative z-10 mt-1 block h-3.5 w-3.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
				></span>

				{#if i < items.length - 1}
					<!-- line extends into the inter-item gap (space-y-6 = 1.5rem => -bottom-6) -->
					<span class="absolute top-5 -bottom-6 left-[7px] w-px bg-gray-200 dark:bg-gray-700"
					></span>
				{/if}
			</div>

			<!-- content -->
			<div class="flex-1">
				<h3 class="mb-1 font-semibold">{e.title}</h3>
				<div class="text-sm text-gray-700 dark:text-gray-300">{e.subtitle}</div>
				{#if e.body}
					<p class="my-2 text-justify text-gray-800 dark:text-gray-200">{e.body}</p>
				{/if}
			</div>
		</li>
	{/each}
</ul>
