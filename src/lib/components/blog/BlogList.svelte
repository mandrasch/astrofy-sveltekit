<script lang="ts">
  import HorizontalCard from '$lib/components/HorizontalCard.svelte';
  import createSlug from '$lib/helpers/createSlug';

  type Post = {
    slug: string;
    title: string;
    description?: string;
    heroImage?: string;
    badge?: string;
    tags?: string[];
  };

  type PageNav = { prev: string | null; next: string | null };

  let { posts, nav, title = 'Blog' }: { posts: Post[]; nav: PageNav; title?: string } = $props();
</script>

<div class="mb-5">
  <div class="w-full text-3xl font-bold">{title}</div>
  <div class="mt-1 text-gray-600">Latest posts and articles</div>
  <div class="mt-4 h-px w-full bg-gray-200"></div>
  <div class="sr-only">{posts.length} posts</div>
  <div class="mt-2" aria-hidden="true"></div>
</div>

{#if posts.length === 0}
  <div class="min-w-full w-full border-l-4 border-pink-500 bg-gray-100 p-4">
    <p class="font-semibold">Sorry!</p>
    <p>There are no blog posts to show at the moment. Check back later!</p>
  </div>
{:else}
  <ul>
    {#each posts as post}
      <li>
        <HorizontalCard
          title={post.title}
          img={post.heroImage}
          desc={post.description}
          url={`/blog/${createSlug(post.title, post.slug)}`}
          target="_self"
          badge={post.badge}
          tags={post.tags}
        />
        <div class="my-0 h-px w-full bg-gray-200"></div>
      </li>
    {/each}
  </ul>
{/if}

<div class="mt-6 flex justify-between">
  {#if nav.prev}
    <a href={nav.prev} class="my-6 mx-2 inline-flex items-center gap-2 rounded border border-gray-300 px-3 py-2 text-gray-800 hover:bg-gray-100">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
      Recent posts
    </a>
  {:else}
    <div></div>
  {/if}

  {#if nav.next}
    <a href={nav.next} class="my-6 mx-2 inline-flex items-center gap-2 rounded border border-gray-300 px-3 py-2 text-gray-800 hover:bg-gray-100">
      Older Posts
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </a>
  {:else}
    <div></div>
  {/if}
</div>
