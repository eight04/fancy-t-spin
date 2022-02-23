// a small script to convert markdown into valid source
import * as path from "path";
import {readFile, writeFile, readdir, rm} from "fs/promises";

await processDir("src/routes/blog");

async function processDir(root) {
  const entries = await readdir(root, {withFileTypes: true});
  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;
    if (entry.isDirectory()) {
      await processDir(path.join(root, entry.name));
      continue;
    }
    // if (entry.name.endsWith(".svelte.md")) {
    if (entry.name.endsWith(".md")) {
      await processContent(path.join(root, entry.name));
    }
  }
}

async function processContent(file) {
  let content = await readFile(file, "utf8");

  // content = content.replace(/<script[\s\S]*?<\/script>/m, "");
  // content = content.replace(/<Fumen([^>]+)\/>/g, "{{fumen$1}}");

  // let title = content.match(/^(.+)\r?\n={3,}/m);
  // if (title) {
    // content = content.slice(0, title.index) + content.slice(title.index + title[0].length);
    // title = title[1];
  // }

  // const frontmatter = title ?
    // `---\ntitle: ${title}\n---` : "";

  // content = [
    // frontmatter,
    // content.trim()
  // ].filter(Boolean).join("\n");

  content = content.replace(/" *}}/g, '" /}}');

  // const newFile = file.replace(".svelte", "");
  const newFile = file;
  await writeFile(newFile, content);
  if (newFile !== file) {
    await rm(file);
  }
}

