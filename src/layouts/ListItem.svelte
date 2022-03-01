<script>
/* import urel from "urel"; */
import {request} from "./env.mjs";

export let nameMap;
export let path;
export let subs = [];

function isLinkActive() {
  return path === $request.permalink;
}
</script>

<li class:active={isLinkActive()}>
  <a href={path}>{nameMap.get(path)}</a>
  {#if subs.length}
    <ul>
      {#each subs as item}
        <svelte:self {...item} {nameMap}/>
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
