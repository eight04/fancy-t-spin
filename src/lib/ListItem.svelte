<script lang="ts">
import { page } from '$app/stores';
import {base} from "$app/paths";

export let name;
export let path;
export let subs = [];

let realPath;

$: {
  if (path === "/") {
    realPath = base;
  } else {
    realPath = base + path;
  }
}

function isLinkActive() {
  const p = $page.url.pathname;
  if (p === realPath) return true;
  /* if (realPath !== base && p.startsWith(realPath + "/")) return true; */
  return false;
}
</script>

<li class:active={isLinkActive()}>
  <a sveltekit:prefetch href={realPath}>{name}</a>
  {#if subs.length}
    <ul>
      {#each subs as item}
        <svelte:self {...item}/>
      {/each}
    </ul>
  {/if}
</li>

<style>
li {
  list-style: none;
}
a {
  display: inline-block;
  padding: .3em .6em;
}
.active > a {
  box-shadow: inset 0 0 2em 0 currentColor;
  border-radius: .3em;
}
@media (min-width: 720px) {
  a {
    padding: .6em 1.2em;
  }
}
</style>
