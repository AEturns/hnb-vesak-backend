"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        }
        catch (error) {
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
        }
        catch (error) {
            ctx.response.status = 500;
            ctx.response.body = { error: "Unable to create the reply comment" };
        }
    },
}));
