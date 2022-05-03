const Fastify = require('fastify')
const autoload = require('@fastify/autoload')
const path = require('path');

const models = require('./models');

async function build(opts = {}) {
  const app = Fastify(opts)

  app.register(require('@fastify/cors'), { origin: '*' });

  app.register(autoload, {
    dir: path.join(__dirname, './routes/materials'),
    options: {}
  });
  
  await models.sequelize.sync()

  return app
}

module.exports = build