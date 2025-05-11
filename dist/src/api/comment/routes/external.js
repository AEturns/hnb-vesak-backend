module.exports = {
    routes: [
        {
            method: "POST",
            path: "/comment/draft",
            handler: "external.create_draft",
        },
        {
            method: "POST",
            path: "/comment/reply/draft",
            handler: "external.create_reply_draft",
        },
    ],
};
