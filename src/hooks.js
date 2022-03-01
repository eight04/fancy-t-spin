const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },
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
