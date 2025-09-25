<script lang="ts">
	import TimeLine from '$lib/components/cv/TimeLine.svelte'; // items=[] version
	import { CV } from '$lib/config/cv';
	let { data } = $props();
</script>

<section class="mb-5">
	<h1 class="text-3xl font-bold">Profile</h1>
</section>
<p class="mb-10 text-justify">
	{CV.profile}
</p>

<section class="mb-5">
	<h2 class="text-3xl font-bold">Education</h2>
</section>
<!-- Tailwind-only timeline -->
<TimeLine items={CV.education} />

<section class="mt-10 mb-5">
	<h2 class="text-3xl font-bold">Experience</h2>
</section>
<!-- Tailwind-only timeline -->
<TimeLine items={CV.experience} />

<section class="mt-10 mb-5">
	<h2 class="text-3xl font-bold">Certifications</h2>
</section>
<ul class="mx-6 mb-10 grid list-disc gap-2">
	{#each CV.certs as c}
		<li>
			<a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
		</li>
	{/each}
</ul>

<section class="mb-5">
	<h2 class="text-3xl font-bold">Skills</h2>
</section>
<ul class="mx-6 list-disc columns-2 md:columns-5">
	{#each CV.skills as s}
		<li>{s}</li>
	{/each}
</ul>
