const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy({ './public/*': '/' });

  eleventyConfig.addFilter('makeExcerpt', (description) => description.slice(0, 300).trim() + '...');
  eleventyConfig.addFilter('slice', (array, number) => array.slice(0, number));
  eleventyConfig.addFilter('removeEscapes', (str) => eval('`' + str + '`'));
  eleventyConfig.addFilter('removeFirstItem', (array) => {
    if (Array.isArray(array) && array.length > 0) {
      return array.slice(1);
    }
    return array;
  });

  eleventyConfig.addFilter('postDate', (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  });
  eleventyConfig.addFilter('date', (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED));

  eleventyConfig.addFilter('recentPosts', (posts, id) => posts.filter((post) => post.id != id));

  eleventyConfig.addFilter('filterFeaturedPosts', (posts) => posts.filter((post) => post.featured));

  eleventyConfig.addFilter('recentPosts', (posts, id) => posts.filter((post) => post.id != id));

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
