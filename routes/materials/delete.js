const models = require('../../models');

module.exports = {
    method: 'DELETE',
    url: '/v1/materials/:id',
    schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
            }
          },
          404: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
            }
          },
        },
        
    },
    handler: async function (request, reply) {
        const result = await models.Material.findByPk(request.params['id']);

        if (result == null) {
            reply.code(404).send({ success: false });
        } else {
          result.destroy();
          reply.send({ success: true });
        }
    }
  };
