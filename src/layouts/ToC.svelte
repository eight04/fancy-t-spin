<script>
import ToCList from "./ToCList.svelte";
export let tree;
</script>

<div class="toc-root">
  <input type="checkbox" id="toc-check">
  <div class="toc-content">
    <heading>On this page</heading>

    <ToCList list={tree} />
  </div>
  <label for="toc-check" class="toc-label" title="Menu"></label>
</div>

<style>
.toc-root {
  position: fixed;
  bottom: 1em;
  right: 1em;
  color: var(--bg);
  background: var(--primary);
  border-radius: 5px;
  max-height: calc(100vh - 4em);
  display: flex;
  flex-direction: column;
}
#toc-check {
  position: fixed;
  top: -100px;
  opacity: 0;
}
.toc-label {
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.toc-label::before {
  content: "☰";
}
.toc-content {
  display: none;
  overflow-y: auto;
  min-height: 0;
}
#toc-check:checked ~ .toc-content {
  display: block;
}
#toc-check:checked ~ .toc-label {
  width: auto;
}
heading {
  font-size: 1.2em;
  font-weight: bold;
  display: block;
  margin: .8rem .8rem 0;
}
heading + :global(ul) {
  margin: 0;
}
/* .toc-root { */
  /* position: sticky; */
  /* top: 2em; */
  /* overflow-y: auto; */
/* } */
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
  background: var(--bg);
  color: var(--primary);
}
@media (min-width: 1000px) {
  .toc-root {
    position: sticky;
    background: unset;
    color: unset;
    top: 2em;
  }
  .toc-label {
    display: none;
  }
  .toc-content {
    display: block;
  }
  .toc-root :global(a.active) {
    color: var(--bg);
    background: var(--primary);
  }
  heading {
    margin: 0 .8rem .8rem;
  }
}
</style>
