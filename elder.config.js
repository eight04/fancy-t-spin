const path = require("path");
require('dotenv').config();
module.exports = {
  lang: 'en',
  srcDir: 'src',
  distDir: 'docs',
  rootDir: process.cwd(),
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: 'hybrid',
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
      slugFormatter: file => {
        let p = path.relative("./src/routes/blog", file);
        p = p.replace(/\\/g, "/").replace(/\.\w+$/, "");
        p = p.replace(/\/index$|^index$/, "");
        return p;
      },
      useTableOfContents: true
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
      reload: true, // if you are having issues with reloading not working, change to true.
    }
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};