import MagicString from "magic-string";
import {createSVG} from "fumen-svg";

export default function createPlugin() {
  return {
    markup({content, filename}) {
      let dirty = false;
      const s = new MagicString(content);
      let match;
      const RX_FUMEN = /<Fumen([^>]+)\/>/g;
      while ((match = RX_FUMEN.exec(content))) {
        let n;
        const RX_ATTR = /(\w+)=['"]([^'"]+)/g;
        while ((n = RX_ATTR.exec(match[1]))) {
          if (/data/i.test(n[1])) {
            const {width, height} = getFumenSize(n[2]);
            s.appendRight(match.index + 6, ` --width="${width}px" --height="${height}px"`);
            dirty = true;
            break;
          }
        }
      }

      if (dirty) {
        return {
          code: s.toString(),
          map: s.generateMap()
        };
      }
    }
  };
}

function getFumenSize(data) {
  const s = createSVG({data});
  const match = s.match(/width="(\d+)" height="(\d+)"/);
  return {
    width: match[1],
    height: match[2]
  };
}
