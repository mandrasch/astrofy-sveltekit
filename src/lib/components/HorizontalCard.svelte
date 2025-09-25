<script lang="ts">
	// Runes mode props
	let {
		title,
		img, // string URL (e.g. '/post_img.webp' or imported asset)
		desc,
		url = '#',
		badge,
		tags = [] as string[],
		target = '_blank' as '_self' | '_blank'
	} = $props();

	// build /tag URL base (e.g. '/blog/my-post' -> '/blog/my-post/tag')
	const tag_url = $derived(() => {
		const bits = (url ?? '').split('/').filter(Boolean);
		return '/' + [...bits.slice(0, -1), 'tag'].join('/');
	});
</script>

<article
	class="rounded-xl bg-white transition duration-150 ease-in-out hover:scale-[1.02] hover:shadow-xl"
>
	<a
		href={url}
		{target}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		class="block"
	>
		<div class="flex flex-col gap-4 p-4 md:flex-row md:items-start">
			{#if img}
				<!-- image -->
				<div class="shrink-0 overflow-hidden rounded-lg bg-gray-100 md:max-w-[13rem]">
					<img src={img} alt={title} class="h-full w-full object-cover" />
				</div>
			{/if}

			<div class="min-w-0 grow">
				<h3 class="text-xl font-bold">
					{title}
					{#if badge}
						<span
							class="ml-2 rounded-full bg-pink-600/10 px-2 py-0.5 align-middle text-xs font-semibold text-pink-700"
						>
							{badge}
						</span>
					{/if}
				</h3>

				{#if desc}
					<p class="mt-1 text-[1.05rem] text-gray-700">{desc}</p>
				{/if}

				{#if tags?.length}
					<ul class="mt-2 flex flex-wrap justify-end gap-2">
						{#each tags as tag}
							<li>
								<a
									href={`${tag_url}/${tag}`}
									class="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
								>
									{tag}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</a>
</article>
