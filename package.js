Package.describe({
  name: "origen:vulcan-hotjar",
  version: "0.0.1",
  // Brief, one-line summary of the package.
  summary: "Hotjar integration for VulcanJS",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/OrigenStudio/vulcan-hotjar",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(api => {
  api.versionsFrom("1.6.0.1");

  api.use(["vulcan:core@1.8.11", "vulcan:events@1.8.11"]);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");
});
