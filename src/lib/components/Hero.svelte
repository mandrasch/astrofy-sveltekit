<script lang="ts">
	import { HERO } from '$lib/config/config';
</script>

<section class="mt-5 pb-12">
	<div class="py-1 text-xl">{HERO.kicker}</div>
	<h1 class="text-5xl font-bold">{HERO.title}</h1>
	<div class="py-3 text-3xl font-bold">{HERO.subtitle}</div>

	<p class="py-2 text-lg"><span>{@html HERO.copy}</span></p>

	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href={HERO.primary.href}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:opacity-90"
		>
			{HERO.primary.text}
		</a>

		<a
			href={HERO.secondary.href}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 hover:bg-gray-50"
		>
			{HERO.secondary.text}
		</a>
	</div>
</section>
