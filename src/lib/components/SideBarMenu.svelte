<script lang="ts">
	// TODO: Upgrade to $app/state
	import { page } from '$app/stores';
	import { CONTACT_MAIL } from '$lib/config/config';

	type Item = {
		id: string;
		href: string; // internal path or external (mailto)
		label: string;
		external?: boolean;
	};

	// base items
	const items: Item[] = [
		{ id: 'home', href: '/', label: 'Home' },
		{ id: 'projects', href: '/projects', label: 'Projects' },
		{ id: 'blog', href: '/blog', label: 'Blog' }, // normalize to no trailing slash
		{ id: 'cv', href: '/cv', label: 'CV' }
	];

	// add Contact only if email is provided
	if (CONTACT_MAIL?.trim()) {
		items.push({
			id: 'contact',
			href: `mailto:${CONTACT_MAIL}`,
			label: 'Contact',
			external: true
		});
	}

	// --- active-route helper -----------------------------------------------
	function normalize(path: string) {
		// keep "/" as is; strip trailing slash from others
		return path === '/' ? '/' : path.replace(/\/+$/g, '');
	}

	function isActive(href: string) {
		if (href.startsWith('mailto:') || href.startsWith('http')) return false; // externals never "active"
		const current = normalize($page.url.pathname);
		const target = normalize(href);
		if (target === '/') return current === '/';
		// highlight for exact match and nested routes (/blog/*, /projects/*)
		return current === target || current.startsWith(target + '/');
	}
</script>

<ul class="flex flex-col gap-1 overflow-y-auto">
	{#each items as { id, href, label, external }}
		<li>
			<a
				{id}
				{href}
				class="block rounded-md px-3 py-3 text-base hover:bg-gray-200
				       {isActive(href) ? 'bg-gray-300 font-semibold' : ''}"
				aria-current={isActive(href) ? 'page' : undefined}
				{...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
			>
				{label}
			</a>
		</li>
	{/each}
</ul>
