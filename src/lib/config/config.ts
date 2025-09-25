// src/lib/config/config.ts

// ----------------- Identity (single source of truth) -----------------
export const PERSON = {
	name: 'Mary Jackson',
	email: 'hello.world@example.org',
	homepage: 'https://manuelernestog.github.io' // optional, can be ''
} as const;

// ----------------- Site basics -----------------
export const SITE = {
	title: PERSON.name, // <- reuse
	description: 'Aerospace Engineer',
	transitionAPI: true, // native View Transitions; set false to disable
	generateSlugFromTitle: true
} as const;

// Keep back-compat named exports if you already used them elsewhere
export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;
export const TRANSITION_API = SITE.transitionAPI;
export const GENERATE_SLUG_FROM_TITLE = SITE.generateSlugFromTitle;

// ----------------- Hero -----------------
export const HERO = {
	kicker: 'Hey there 👋',
	title: `I'm ${PERSON.name}`, // <- reuse
	subtitle: 'Aerospace Engineer',
	copy: `I broke barriers as NASA’s first Black female engineer, proving that talent and determination belong in every room. My journey shows that when we challenge limits, we lift the future for everyone.`,
	primary: { text: "Let's connect!", href: 'https://example.org' },
	secondary: { text: 'Get This template', href: 'https://github.com/manuelernestog/astrofy' }
} as const;

// ----------------- Contact -----------------
export const CONTACT_MAIL = PERSON.email; // empty string '' hides the Contact link

// ----------------- Socials -----------------
const LINKS = {
	support: 'https://manuelernestog.github.io/support-my-work/',
	github: 'https://github.com/manuelernestog',
	linkedin: 'https://www.linkedin.com/in/manuelernestogr',
	rss: '/rss.xml'
} as const;

export const SOCIALS = [
	{
		id: 'support',
		href: LINKS.support,
		label: 'Support my work',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"/>
    </svg>`
	},
	{
		id: 'github',
		href: LINKS.github,
		label: 'GitHub',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145
                 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696
                 -2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459
                 -.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028
                 .89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334
                 -2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675
                 -.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021
                 a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336
                 c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64
                 .64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922
                 .355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737
                 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974
                 22 6.465 17.535 2 12.026 2z" />
          </svg>`
	},
	{
		id: 'linkedin',
		href: LINKS.linkedin,
		label: 'LinkedIn',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="4.983" cy="5.009" r="2.188" />
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118
        1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783
        -1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
    </svg>`
	},
	{
		id: 'rss',
		href: LINKS.rss,
		label: 'RSS Feed',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"/>
      <path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"/>
      <circle cx="6" cy="18" r="2"/>
    </svg>`
	}
] as const;

// ----------------- Footer -----------------
export const FOOTER = {
	year: new Date().getFullYear(),
	author: PERSON.name, // <- reuse
	authorUrl: PERSON.homepage, // can be ''
	templateName: 'SvelteKit Portfolio Sidebar',
	templateUrl: 'https://astrofy-template.netlify.app/' // replace if you forked/renamed
} as const;
