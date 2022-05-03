const models = require('../../models');
const MaterialSchema = require('../../schemas/material');

module.exports = {
    method: 'POST',
    url: '/v1/materials',
    schema: {
        body: MaterialSchema,
        response: {
            200: MaterialSchema
        }
    },
    handler: async function (request, reply) {      
        const result = await models.Material.create(request.body);
        reply.send(result);
    }
};