<!-- src/lib/components/SideBar.svelte -->
<script lang="ts">
	import SideBarMenu from '$lib/components/SideBarMenu.svelte';
	import SideBarFooter from '$lib/components/SideBarFooter.svelte';
	import profile from '$lib/assets/960px-Mary_Jackson_1979_Portrait_(LRC-1979-B701_P_F002-07086).jpg';
</script>

<div class="flex min-h-full w-72 flex-col bg-gray-100 px-2 pt-2 text-gray-900">
	<div class="mx-auto mt-5 mb-6 w-fit">
		<a href="/" class="block transition-transform hover:scale-105">
			<div class="mx-auto h-[8.5rem] w-[8.5rem] overflow-hidden rounded-full">
				<img
					src={profile}
					alt="Profile image"
					class="h-full w-full object-cover"
					width="300"
					height="300"
				/>
			</div>
		</a>
	</div>

	<SideBarMenu />

	<div class=" mt-auto">
		<SideBarFooter />
	</div>
</div>
