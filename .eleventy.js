module.exports = function (eleventyConfig) {
  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("site/assets"); // Assets dir
  eleventyConfig.addPassthroughCopy("site/style"); // Stylesheets dir

  return {
    dir: {
      input: "site", // Main input dir
      includes: "_includes", // Partial templates
      data: "_data", // Global data files
      layouts: "_layouts", // Page layouts
      output: "dist", // Output directory for the built website
    },
  };
};
