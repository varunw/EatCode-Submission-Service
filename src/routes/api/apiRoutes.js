async function apiPlugin(fastify,options){
    fastify.register(require('./v1/v1Routes'));
}

module.exports = apiPlugin;