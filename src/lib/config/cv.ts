// src/lib/cv.ts
export type Education = { title: string; subtitle: string };
export type Experience = { title: string; subtitle: string; body?: string };
export type Certification = { label: string; href: string };
export type CvData = {
	profile: string;
	education: Education[];
	experience: Experience[];
	certs: Certification[];
	skills: string[];
};

export const CV: CvData = {
	profile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam…`,

	education: [
		{ title: 'Title Name', subtitle: '[start] – [end] at [Study Center], [City], [Country]' },
		{ title: 'Title Name', subtitle: '[start] – [end] at [Study Center], [City], [Country]' }
	],

	experience: [
		{
			title: 'Job Title at Project or Company Name',
			subtitle: 'From [Start] to [End] at [Company], [City], [Country]',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…'
		},
		{
			title: 'Job Title at Project or Company Name',
			subtitle: 'From [Start] to [End] at [Company], [City], [Country]',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…'
		},
		{
			title: 'Job Title at Project or Company Name',
			subtitle: 'From [Start] to [End] at [Company], [City], [Country]',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…'
		}
	],

	certs: [
		{ label: 'Certification Name (with link)', href: '#' },
		{ label: 'Certification Name (with link)', href: '#' }
	],

	skills: [
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name',
		'Skill Name'
	]
};
