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
  const tag = params.tag;

  const all = Object.entries(modules)
    .map(toEntry)
    .filter((p) => (p.tags || []).includes(tag))
    .sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

  const total = all.length;
  const page = 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const data = all.slice(start, end);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const base = `/blog/tag/${tag}`;
  const prev = null; // first page has no prev
  const next = page < totalPages ? `${base}/page/${page + 1}` : null;

  return {
    meta: {
      title: `Blog - ${tag}`,
      description: `Posts tagged ${tag}`,
      includeSidebar: true,
      sideBarActiveItemID: 'blog'
    },
    posts: data,
    nav: { prev, next },
    heading: `Blog - ${tag}`
  };
}

