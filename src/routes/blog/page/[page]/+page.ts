export const prerender = true;

type Mod = { metadata: any; default: unknown };

const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

function toEntry([path, mod]: [string, unknown]) {
  const m = mod as Mod;
  const slug = path.split('/').pop()!.replace('.md', '');
  return { slug, ...m.metadata } as any;
}

const PAGE_SIZE = 10;

export function load({ params }) {
  const page = Math.max(1, parseInt(params.page || '1', 10) || 1);

  const all = Object.entries(modules)
    .map(toEntry)
    .sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const clamped = Math.min(page, totalPages);
  const start = (clamped - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const data = all.slice(start, end);

  const prev = clamped > 2 ? `/blog/page/${clamped - 1}` : clamped === 2 ? '/blog' : null;
  const next = clamped < totalPages ? `/blog/page/${clamped + 1}` : null;

  return {
    meta: {
      title: `Blog · Page ${clamped}`,
      description: 'Blog posts and articles',
      includeSidebar: true,
      sideBarActiveItemID: 'blog'
    },
    posts: data,
    nav: { prev, next }
  };
}

