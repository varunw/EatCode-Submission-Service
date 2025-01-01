const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repository/repositoryPlugin');

/**
 * 
 * @param {Fastify object} fastify
 * @param {*} options
 * 
 */


async function app(fastify,options){
    // fastify.register(require('fastify-cors'));

    fastify.register(repositoryPlugin);
    fastify.register(servicePlugin);

    fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
    
}

module.exports = fastifyPlugin(app);