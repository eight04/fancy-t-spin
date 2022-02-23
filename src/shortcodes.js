const {createSVG} = require("fumen-svg");

function getFumenSize(data) {
  const s = createSVG({data});
  const match = s.match(/width="(\d+)" height="(\d+)"/);
  return {
    width: match[1],
    height: match[2]
  };
}

module.exports = [
  {
    shortcode: "fumen",
    run: ({helpers, props, request, content}) => {
      if (!props.data) {
        console.error("invalid fumen", request.permalink, content);
        return "!invalid fumen!";
      }
      const {width, height} = getFumenSize(props.data);
      props.width = `${width}px`;
      props.height = `${height}px`;
      return helpers.inlineSvelteComponent({name: "Fumen", props, options: {loading: "lazy"}});
    }
  }
];
