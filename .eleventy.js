module.exports = function (eleventyConfig) {
  // Pass through the "public" folder to the output folder
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src", // The source directory for content and templates
      includes: "_includes", // Directory for layouts and partials
      data: "_data", // Data files
      output: "_site", // Output directory for built site
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
  };
};
