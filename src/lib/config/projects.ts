export type Project = {
	title: string;
	img: string;
	desc: string;
	url: string;
	badge?: 'NEW' | 'FOSS' | (string & {});
	tags?: readonly string[];
	featured?: boolean; // ✅ NEW
};

export type ProjectGroup = {
	category: string;
	items: readonly Project[];
};

export const PROJECT_GROUPS = [
	{
		category: 'Open Source',
		items: [
			{
				title: 'Demo Project 1',
				img: '/post_img.png',
				desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
				url: '#',
				badge: 'NEW',
				featured: true // ✅ mark as featured
			},
			{
				title: 'Demo Project 2',
				img: '/post_img.png',
				desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
				url: '#'
			},
			{
				title: 'Demo Project 3',
				img: '/post_img.png',
				desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
				url: '#'
			}
		] as const
	},
	{
		category: 'Client Work',
		items: [
			{
				title: 'Demo Project 4',
				img: '/post_img.png',
				desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
				url: '#',
				badge: 'FOSS',
				featured: true // ✅ mark as featured
			},
			{
				title: 'Demo Project 5',
				img: '/post_img.png',
				desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
				url: '#',
				badge: 'FOSS',
				featured: true // ✅ mark as featured
			}
		] as const
	}
] satisfies readonly ProjectGroup[];

// Convenience: flat list
export const PROJECTS: readonly Project[] = PROJECT_GROUPS.flatMap((g) => g.items);
