// Equivalent to the Astro version – just plain TS for SvelteKit.

import { GENERATE_SLUG_FROM_TITLE } from '$lib/config/config';

/**
 * Create a slug from a title unless GENERATE_SLUG_FROM_TITLE is false,
 * in which case we return the static slug from front-matter.
 */
export default function createSlug(title: string, staticSlug: string): string {
	return !GENERATE_SLUG_FROM_TITLE
		? staticSlug
		: title
				.trim() // remove leading & trailing whitespace
				.toLowerCase() // output lowercase
				.replace(/\s+/g, '-') // replace spaces with -
				.replace(/[^\w-]/g, '') // remove special characters except -
				.replace(/^-+|-+$/g, ''); // remove leading & trailing separators
}
