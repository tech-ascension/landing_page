module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/normalize.css");
  eleventyConfig.addPassthroughCopy("./src/blog.css");
  eleventyConfig.addPassthroughCopy("./src/application.css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
