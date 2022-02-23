import * as path from "path";
import {readFile, writeFile, readdir, rm} from "fs/promises";

await processDir("src/routes");

async function processDir(root) {
  const entries = await readdir(root, {withFileTypes: true});
  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;
    if (entry.name.endsWith(".svelte.md")) continue;
    if (entry.isDirectory()) {
      await processDir(path.join(root, entry.name));
    } else if (entry.name.endsWith(".md")) {
      await processContent(path.join(root, entry.name));
    }
  }
}

async function processContent(file) {
  let content = await readFile(file, "utf8");
  content = `<script>
import Fumen from "$lib/Fumen.svelte";
</script>

${content}`;
  const newFile = file.replace(".md", ".svelte.md");
  await writeFile(newFile, content);
  await rm(file);
}

