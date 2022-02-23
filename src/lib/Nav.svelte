<script lang="ts">
import {list} from "./routes.mjs";
import ListItem from "./ListItem.svelte";
</script>

<nav>
  <ul>
    {#each list as item}
      <ListItem {...item}/>
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
