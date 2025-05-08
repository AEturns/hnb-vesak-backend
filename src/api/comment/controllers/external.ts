const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  async create_draft(ctx) {
    try {
      const { data } = ctx.request.body;
      const comment = await strapi.documents("api::comment.comment").create({
        data: {
          user: data.user,
          text: data.text,
          publishedAt: null,
        },
      });
      ctx.response.status = 201;
      ctx.response.body = { message: "Comment created successfully", comment };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = { error: "Unable to create the comment" };
    }
  },
}));
