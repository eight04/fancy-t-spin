<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;

function getTitle() {
  let title = frontmatter?.title;
  if (!title) {
    title = request.permalink.match(/([^/]+)\/?$/)[1];
  }
  return title;
}
</script>

<svelte:head>
  <title>{getTitle()} - Fancy T-Spin</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="title">
  <h1>{frontmatter.title || ''}</h1>
  {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}
</div>

{#if html}
  {@html html}
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
