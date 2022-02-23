<script>
import {base} from "$app/paths";
import {page} from "$app/stores";
import {map} from "./routes.mjs";

function getTitle() {
  let p = $page.url.pathname;
  if (p === base) {
    p = "/";
  } else if (base !== "/") {
    p = p.slice(base.length);
  }
  const item = map.get(p);
  if (item) {
    return `${item.name} - Fancy T-Spin`;
  }
  return `${p.split("/").pop()} - Fancy T-Spin`;
}
</script>

<svelte:head>
  <title>{getTitle()}</title>
</svelte:head>
