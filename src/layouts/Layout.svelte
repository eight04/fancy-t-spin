<script>
import Nav from './Nav.svelte';
import ToC from "./ToC.svelte";

import '../../assets/style.css';
import {settings as s, data as d, request as r} from "./env.mjs";

export let templateHtml, data, request, settings;
$s = settings;
$d = data;
$r = request;

function getTitle() {
  let title = data.frontmatter?.title;
  if (!title) {
    title = request.permalink.split("/").pop();
  }
  return `${title} - Fancy T-Spin`;
}
</script>

<svelte:head>
  <title>{getTitle()}</title>
</svelte:head>

<div class="container">
  <header>
    <Nav/>
  </header>

  <main>
    {@html templateHtml}
  </main>

  <aside class="toc">
    <ToC tree={data.tocTree} />
  </aside>

  <footer>
    <a href="https://github.com/eight04/fancy-t-spin">https://github.com/eight04/fancy-t-spin</a>
  </footer>
</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
}
@media (min-width: 720px) {
  .container {
    display: grid;
    align-items: stretch;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
    margin: 0 2em;
  }
  footer {
    grid-column: 1 / 4;
    padding: 5em;
    text-align: center;
  }
}
@media (min-width: 1000px) {
  .container {
    grid-template-columns: 1fr 2fr 1fr;
  }
  main {
    overflow: hidden;
  }

}
</style>
