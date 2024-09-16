const { DateTime } = require("luxon");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Pass through the "public" folder to the output folder
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Add a collection for posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
  eleventyConfig.addCollection("pagination", function (collection) {
    return collection.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src", // The source directory for content and templates
      includes: "_includes", // Directory for layouts and partials
      data: "_data", // Data files
      output: "_site", // Output directory for built site
    },
  };
};
