<script lang="ts">
	import { FOOTER } from '$lib/config/config';
</script>

<footer class="mb-5 block pt-10 text-center text-gray-700">
	<div class="pb-2">
		&copy; {FOOTER.year}
		{FOOTER.author}
	</div>

	<div class="inline opacity-75">
		<a
			href={FOOTER.templateUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="font-bold underline hover:text-gray-900"
		>
			{FOOTER.templateName}
		</a>
		(Fork of
		<a
			class="font-bold underline hover:text-gray-900"
			href="https://astrofy-template.netlify.app/"
			target="_blank">Astrofy Template ⚡️</a
		>)
	</div>
</footer>
