<script>
import urel from "urel";

export let nameMap;
export let path;
export let subs = [];
export let request;

function isLinkActive() {
  return path === request.permalink;
}

function relateUrl(a, b) {
  return urel(a, b);
}
</script>

<li class:active={isLinkActive()}>
  <a href={relateUrl(request.permalink, path)}>{nameMap.get(path)}</a>
  {#if subs.length}
    <ul>
      {#each subs as item}
        <svelte:self {...item} {nameMap} {request}/>
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
