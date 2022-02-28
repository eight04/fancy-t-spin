<script>
import {createSVG} from "fumen-svg";
import {onMount} from "svelte";

import {getLazyLoader} from "./lazy-load.js";

export let data;
export let delay;
export let width;
export let height;

let svg;

let fumenElement;

onMount(() => {
  if (!fumenElement) throw new Error("fumenElement is not available");
  const xo = getLazyLoader();
  xo.observe(fumenElement, load, unload);
});

function load() {
  if (!svg) {
    const svgSource = createSVG({data, delay: delay ? Number(delay) : undefined});
    svg = new Image;
    svg.src = `data:image/svg+xml,${encodeURIComponent(svgSource)}`;
    svg.addEventListener("load", () => {
      svg.classList.add("img-loaded");
    }, {once: true});
  }
  fumenElement.append(svg);
}

function unload() {
  if (!svg) return;
  svg.remove();
}
</script>

<a class="fumen" bind:this={fumenElement} href="https://harddrop.com/fumen/?{data}" style:width={width} style:height={height}>
</a>

<style>
.fumen {
  display: inline-block;
  /* contain: strict; */
  /* width: var(--width); */
  /* height: var(--height); */
}
.fumen :global(img) {
  opacity: 0;
}
.fumen :global(img.img-loaded) {
  animation: fadein .5s forwards;
}
@keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>
