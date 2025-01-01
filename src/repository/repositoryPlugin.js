const SubmissionRepository = require('./submissionRepository');
// const testService = require('./submissionService');
const fastifyPlugin = require('fastify-plugin');

async function repositoryPlugin(fastify,options){
    fastify.decorate('submissionRepository',SubmissionRepository);
}

module.exports = fastifyPlugin(repositoryPlugin);