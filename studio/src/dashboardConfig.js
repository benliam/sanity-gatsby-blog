export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611a65126d376639ac149406",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9rspzhp8",
                  apiId: "74f66719-46e1-4e3a-9c6e-f27ad7ab5c30",
                },
                {
                  buildHookId: "611a6512fc2c0bc3f26c6ac8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2nq8j7gy",
                  apiId: "ae4115e5-ec7b-4f96-b93f-35999c6bb130",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/benliam/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2nq8j7gy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
