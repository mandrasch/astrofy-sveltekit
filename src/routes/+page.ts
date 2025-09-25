// SvelteKit v2 (universal); works with mdsvex content in /src/content/blog
export const prerender = true;

type Mod = { metadata: any; default: unknown };

const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

function toEntry([path, mod]: [string, unknown]) {
	const m = mod as Mod;
	const slug = path.split('/').pop()!.replace('.md', '');
	return { slug, ...m.metadata };
}

export function load() {
	const all = Object.entries(modules)
		.map(toEntry)
		.sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

	const last_posts = all.slice(0, 3);

	return {
		meta: {
			title: 'Home · Your Site',
			description: 'Personal portfolio built with SvelteKit + Tailwind',
			includeSidebar: true,
			sideBarActiveItemID: 'home'
		},
		last_posts
	};
}
