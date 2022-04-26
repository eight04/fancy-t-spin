const path = require('path');
const fs = require('fs-extra');
const hooks = [
  {
    hook: 'buildComplete',
    name: 'removeDistPrefix',
    description: "Remove prefix from dist folder",
    run: ({ settings }) => {
      if (process.env.NODE_ENV !== "production" || !settings.prefix) return;

      const root = path.join(settings.distDir, settings.prefix);
      for (const file of fs.readdirSync(root)) {
        fs.renameSync(path.join(root, file), path.join(settings.distDir, file));
      }
    }
  }
];
module.exports = hooks;
