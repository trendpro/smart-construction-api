const models = require('../../models');
const MaterialSchema = require('../../schemas/material');

module.exports = {
    method: 'PUT',
    url: '/v1/materials/:id',
    schema: {
        body: MaterialSchema,
        response: {
            200: MaterialSchema
        }
    },
    handler: async function (request, reply) {      
      const result = await models.Material.update(request.body, {
        where: {
          id: request.body.id
        }
      });

      if (result == null) {
          reply.code(404).send();
      } else {
        const updatedRecord = await models.Material.findByPk(request.body.id);
        reply.send(updatedRecord);
      }
    }
};