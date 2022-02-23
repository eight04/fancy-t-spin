<script>
// reactive ID link
import {hashValue} from "./url-store.mjs";

export let id, text;

function scrollPage(e) {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
  $hashValue = id;
}
</script>

<a href="#{id}" class:active={id === $hashValue} on:click={scrollPage}>{text}</a>

