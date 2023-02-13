const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/normalize.css");
  // eleventyConfig.addPassthroughCopy("./src/blog.css");
  eleventyConfig.addPassthroughCopy("./src/application.css");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // DateTime Configuration

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("date", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
