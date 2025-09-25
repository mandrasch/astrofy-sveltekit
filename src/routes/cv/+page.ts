// src/routes/cv/+page.ts
export const prerender = true;

export function load() {
	return {
		meta: {
			title: 'Resume',
			includeSidebar: true,
			sideBarActiveItemID: 'cv'
		}
	};
}
