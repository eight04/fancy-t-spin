<script>
import ListItem from "./ListItem.svelte";

export let data;
export let request;

const nameMap = new Map;
for (const item of data.markdown.blog) {
  nameMap.set(item.slug ? `/${item.slug}/` : "/", item.frontmatter?.title);
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
  {path: "/out-of-order/"},
  {path: "/tetrio-180/"},
  {path: "/pc-table/"}
];
</script>

<nav>
  <ul>
    {#each list as item}
      <ListItem {...item} {nameMap} {request} />
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
