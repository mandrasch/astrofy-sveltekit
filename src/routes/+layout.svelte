<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';

	import BaseHead from '$lib/components/BaseHead.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import { SITE_TITLE, SITE_DESCRIPTION } from '$lib/config/config';

	// ✅ runes mode – grab props
	let { children, data } = $props<{
		children?: () => unknown;
		data: {
			meta?: {
				title?: string;
				description?: string;
				image?: string;
				ogType?: 'website' | 'article';
				includeSidebar?: boolean;
				sideBarActiveItemID?: string;
			};
		};
	}>();

	// derived values
	const title = $derived(data.meta?.title ?? SITE_TITLE);
	const description = $derived(data.meta?.description ?? SITE_DESCRIPTION);
	const image = $derived(data.meta?.image);
	const ogType = $derived(data.meta?.ogType ?? 'website');
	const includeSidebar = $derived(data.meta?.includeSidebar ?? true);

	let mobileSidebarOpen = $state(false);
	let isDesktop = $state(false);

	// keep drawer and desktop in sync at the md breakpoint
	onMount(() => {
		const mq = window.matchMedia('(min-width: 768px)'); // Tailwind md
		const update = () => (isDesktop = mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	});

	// auto-close drawer when entering desktop
	$effect(() => {
		if (isDesktop && mobileSidebarOpen) mobileSidebarOpen = false;
	});
</script>

<BaseHead {title} {description} {image} {ogType} />

<!-- +layout.svelte (body) -->

<div class="flex min-h-dvh flex-col bg-white text-gray-900">
	<Header title={SITE_TITLE} on:toggle-sidebar={() => (mobileSidebarOpen = true)} />

	<!-- full-width grid: sidebar | content -->
	<div class="w-full flex-1 md:grid md:min-h-0 md:grid-cols-[19rem_minmax(0,1fr)]">
		{#if includeSidebar}
			<!-- NO fixed height on the aside; let main decide the row height -->
			<aside class="hidden md:block md:bg-gray-100 md:pr-6">
				<!-- make *inner* wrapper sticky, not the whole column -->
				<div class="sticky top-4">
					<SideBar />
				</div>
			</aside>
		{/if}

		<div class="w-full md:flex md:justify-center">
			<main class="max-w-[100vw] p-6 pt-8 lg:max-w-[900px] lg:min-w-[900px] lg:pt-12">
				{@render children?.()}
				<Footer />
			</main>
		</div>
	</div>

	{#if includeSidebar && mobileSidebarOpen}
		<!-- Backdrop OVER the header -->
		<div
			class="fixed inset-0 z-40 bg-black/40 md:hidden"
			on:click={() => (mobileSidebarOpen = false)}
			aria-hidden="true"
		></div>

		<!-- Panel above the backdrop -->
		<aside
			class="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-gray-100 p-2 shadow-lg md:hidden"
			role="dialog"
			aria-modal="true"
		>
			<button
				class="mb-4 rounded p-2 hover:bg-gray-200"
				on:click={() => (mobileSidebarOpen = false)}
			>
				Close
			</button>
			<SideBar />
		</aside>
	{/if}
</div>
