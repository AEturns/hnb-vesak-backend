module.exports = {
    routes: [
      {
        method: "POST",
        path: "/comment/draft",
        handler: "external.create_draft",
      },
    ],
  };
  