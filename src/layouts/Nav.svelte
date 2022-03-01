<script>
import ListItem from "./ListItem.svelte";
import {settings, data} from "./env.mjs";

const nameMap = new Map;
for (const item of $data.markdown.blog) {
  nameMap.set(item.slug ? `${$settings.prefix}/${item.slug}/` : `${$settings.prefix}/`, item.frontmatter?.title);
}

const list = [
	{path: "/"},
  {path: "/ikcco/"},
  {path: "/ikcco-o-based/"},
  {path: "/donation/", subs: [
    {path: "/donation/sl/"},
    {path: "/donation/il/"},
    {path: "/donation/double-triple/"}
	]},
  {path: "/continuous-t-spin/"},
  {path: "/out-of-order/"},
  {path: "/tetrio-180/"},
  {path: "/pc-table/"}
];
processList(list);
function processList(list) {
  for (const i of list) {
    i.path = `${$settings.prefix}${i.path}`;
    if (i.subs) {
      processList(i.subs);
    }
  }
}
</script>

<nav>
  <ul>
    {#each list as item}
      <ListItem {...item} {nameMap}/>
    {/each}
  </ul>
</nav>

<style>
nav {
  position: sticky;
  top: 2em;
}
ul {
  padding: 0;
}
</style>
