<script lang="ts">
import Nav from '$lib/Nav.svelte';
import Title from "$lib/Title.svelte";
import Toc from "svelte-toc";
import '../app.css';
</script>

<Title />

<div class="container">
  <header>
    <Nav />
  </header>
  
  <main>
  	<slot />
  </main>
  
  <Toc --toc-desktop-nav-margin="0" />
  
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
