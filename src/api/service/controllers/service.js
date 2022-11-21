"use strict";

/**
 * service controller
 */

const request = require("request-promise");
const { createCoreController } = require("@strapi/strapi").factories;

const WA_PHONE_ID = process.env.WA_PHONE_NUMBER_ID;
const WA_API_VERSION = process.env.WA_API_VERSION;

const WABaseUrl = "https://graph.facebook.com";

module.exports = createCoreController("api::service.service", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    try {
      await request({
        method: "POST",
        url: `${WABaseUrl}/${WA_API_VERSION}/${WA_PHONE_ID}/messages`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.WA_ACCESS_TOKEN}`,
        },
        body: {
          messaging_product: "whatsapp",
          to: "573114392798",
          recipient_type: "individual",
          type: "text",
          text: {
            preview_url: false,
            body: "Esto es una prueba de la api de WA...",
          },
        },
        json: true,
      });
    } catch (error) {
      return [null, error];
    }
    const response = await super.create(ctx);
    // some more logic

    return response;
  },
  count(ctx) {
    let { query } = ctx.request;
    return strapi.query("api::service.service").count({ where: query });
  },
}));
