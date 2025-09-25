<script lang="ts">
  let { data } = $props<{ data: { post: any } }>();

  type Mod = { default: any; metadata: any };
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true }) as Record<string, Mod>;

  // Find the matching module again to render the content
  const fileSlug = (data.post?.path as string | undefined)?.split('/').pop()?.replace('.md', '');
  let Content: any = null;
  if (fileSlug) {
    const key = Object.keys(modules).find((k) => k.endsWith(`${fileSlug}.md`));
    Content = key ? modules[key].default : null;
  }

  const post = data.post || {};
  function formatDate(value: string | Date) {
    try {
      const d = new Date(value);
      return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(d);
    } catch {
      return String(value ?? '');
    }
  }
  const displayDate = post.pubDate ? formatDate(post.pubDate) : '';
</script>

<main class="md:flex md:justify-center">
  <article class="prose prose-lg max-w-[750px] prose-img:mx-auto">
    {#if post.heroImage}
      <img src={post.heroImage} alt={post.title} class="mb-6 w-full" />
    {/if}
    <h1 class="title my-2 text-4xl font-bold">{post.title}</h1>
    {#if displayDate}
      <time>{displayDate}</time>
    {/if}
    <br />
    {#if post.badge}
      <span class="my-1 rounded-full bg-pink-600/10 px-2 py-0.5 align-middle text-xs font-semibold text-pink-700">{post.badge}</span>
    {/if}
    {#if post.tags?.length}
      {#each post.tags as tag}
        <a href={`/blog/tag/${tag}`} class="ml-2 inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 no-underline">{tag}</a>
      {/each}
    {/if}
    {#if post.updatedDate}
      <div>Last updated on <time>{formatDate(post.updatedDate)}</time></div>
    {/if}
    <div class="my-2 h-px w-full bg-gray-200"></div>

    {#if Content}
      <svelte:component this={Content} />
    {:else}
      <p>Content not found.</p>
    {/if}
  </article>
  <div class="mb-8" />
  <div class="mb-8" />
</main>
