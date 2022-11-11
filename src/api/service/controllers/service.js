"use strict";

/**
 * service controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::service.service", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);
    // some more logic

    return response;
  },
  count(ctx) {
    let { query } = ctx.request;
    return strapi.query("api::service.service").count({ where: query });
  },
}));
