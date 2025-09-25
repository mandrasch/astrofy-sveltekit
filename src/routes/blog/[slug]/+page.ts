import { error } from '@sveltejs/kit';
import createSlug from '$lib/helpers/createSlug';

export const prerender = true;

type Mod = { metadata: any; default: unknown };

const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

function toEntry([path, mod]: [string, unknown]) {
  const m = mod as Mod;
  const fileSlug = path.split('/').pop()!.replace('.md', '');
  const slug = createSlug(m.metadata?.title ?? fileSlug, fileSlug);
  return { path, slug, ...m.metadata } as any;
}

export function load({ params }) {
  const entries = Object.entries(modules).map(toEntry);
  const found = entries.find((e) => e.slug === params.slug);

  if (!found) throw error(404, 'Post not found');

  return {
    meta: {
      title: found.title ?? 'Post',
      description: found.description ?? '',
      image: found.heroImage,
      ogType: 'article',
      includeSidebar: true,
      sideBarActiveItemID: 'blog'
    },
    post: found
  };
}

