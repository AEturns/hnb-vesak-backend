import comment from "./comment";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  async create_draft(ctx) {
    try {
      const { data } = ctx.request.body;
      const comment = await strapi.documents("api::comment.comment").create({
        data: {
          user: data.user,
          comment: data.comment,
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
    async create_reply_draft(ctx) {
    try {
      const { data } = ctx.request.body;
      console.log("data", data);
      console.log("data.parent_comment", data.parent_comment);
      const comment = await strapi.documents("api::reply-comment.reply-comment").create({
        data: {
          parent_comment: data.parent_comment,
          user: data.user,
          comment: data.comment,
          publishedAt: null,
        },
      });
      ctx.response.status = 201;
      ctx.response.body = { message: "Reply Comment created successfully", comment };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = { error: "Unable to create the reply comment" };
    }
  },
    async create_visit(ctx) {
      const  id  = 'cr6sxh11c6d1p7ybvxp8973n'; // ID from the URL

    try {
      // Find the document by ID
      const visit = await strapi.documents('api::visit.visit').findOne({
        documentId: id,
      });
      console.log("visit", visit);

      const randomIncrement = Math.floor(Math.random() * 5) + 1;
      // Update the visitCount by incrementing it
      const updatedVisit = await strapi.documents('api::visit.visit').update({
        documentId: id,
        data: {
          visit: (visit.visit || 0) + randomIncrement,
        },
      });

      return {
        message: 'Visit count incremented',
        data: updatedVisit,
      };
    } catch (error) {
      ctx.badRequest('Error incrementing visit count', { error: error.message });
    }
    }
}));
