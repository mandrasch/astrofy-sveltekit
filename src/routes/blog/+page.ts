export const prerender = true;

type Mod = { metadata: any; default: unknown };

const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

function toEntry([path, mod]: [string, unknown]) {
  const m = mod as Mod;
  const slug = path.split('/').pop()!.replace('.md', '');
  return { slug, ...m.metadata } as any;
}

const PAGE_SIZE = 10;

export function load() {
  const all = Object.entries(modules)
    .map(toEntry)
    .sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

  const total = all.length;
  const page = 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const data = all.slice(start, end);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const prev = null; // page 1 has no prev
  const next = page < totalPages ? `/blog/page/${page + 1}` : null;

  return {
    meta: {
      title: 'Blog',
      description: 'Blog posts and articles',
      includeSidebar: true,
      sideBarActiveItemID: 'blog'
    },
    posts: data,
    nav: { prev, next }
  };
}

