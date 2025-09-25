<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/** Text shown in the center */
	export let title = 'Your Name ⚡️';
	/** Home link */
	export let homeHref = '/';

	// Let the layout decide what to do when the hamburger is clicked
	const dispatch = createEventDispatcher();
	function openSidebar() {
		dispatch('toggle-sidebar');
	}
</script>

<header
	class="sticky top-0 z-30 w-full bg-white/90 text-gray-900 shadow-sm backdrop-blur transition-all duration-100 md:hidden"
>
	<div class="mx-auto flex h-16 items-center justify-between px-4">
		<!-- Hamburger (mobile only) -->
		<button
			type="button"
			class="rounded-md p-2 hover:bg-gray-100 focus:ring focus:outline-none"
			aria-label="Open menu"
			on:click={openSidebar}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-5 w-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>

		<!-- Center title -->
		<a href={homeHref} class="mx-auto text-xl font-semibold">
			{title}
		</a>

		<!-- Right spacer to keep the title centered -->
		<div class="w-9" aria-hidden="true"></div>
	</div>
</header>
