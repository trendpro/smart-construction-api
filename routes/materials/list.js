const models = require('../../models');
const MaterialSchema = require('../../schemas/material');

module.exports = {
  method: 'GET',
  url: '/v1/materials',
  schema: {
      response: {
          200: {
              type: 'array',
              items: MaterialSchema
          }
      }
  },
  handler: async function (request, reply) {
      const result = await models.Material.findAll();
      reply.send(result);
  }
};