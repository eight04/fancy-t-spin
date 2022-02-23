<script>
import ToCList from "./ToCList.svelte";
export let tree;
</script>

<div class="toc-root">
  <heading>On this page</heading>

  <ToCList list={tree} />
</div>

<style>
heading {
  font-size: 1.2em;
  font-weight: bold;
  display: block;
  margin-left: .8rem;
}
.toc-root {
  position: sticky;
  top: 2em;
  max-height: calc(100vh - 4em);
  overflow-y: auto;
}
.toc-root :global(ul) {
  list-style: none;
  padding: 0;
}
.toc-root :global(ul ul) {
  padding-left: 2em;
}
.toc-root :global(a) {
  display: block;
  padding: .4em .8em;
  border-radius: 1em;
}
.toc-root :global(a.active) {
  background: var(--primary);
  color: var(--bg);
}
</style>
