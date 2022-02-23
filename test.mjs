import {readFile, writeFile} from "fs/promises";

let content = await readFile("README.md", "utf8");
content = content.replace(/\[!\[(.*?)]\((.*?)\)]\((.*?)\)/g, (match, alt, img, url) => {
  return `[<img src="${img}" alt="${alt}" loading="lazy"/>](${url})`;
});
await writeFile("README.md", content);

