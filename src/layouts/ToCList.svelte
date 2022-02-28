<script>
import Link from "../components/Link.svelte";
export let list;
</script>

<ul>
  {#each list as item}
    <li>
      <Link hydrate-client={{id: item.id, text: item.text}} />
      {#if item?.children?.length}
        <svelte:self list={item.children} />
      {/if}
    </li>
  {/each}
</ul>


