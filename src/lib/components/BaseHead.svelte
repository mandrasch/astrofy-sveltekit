<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let image: string | undefined;
	export let ogType: 'website' | 'article' = 'website';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	{#if image}<meta property="og:image" content={image} />{/if}
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
