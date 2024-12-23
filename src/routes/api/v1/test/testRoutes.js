const testController = require('../../../../controllers/testController');

async function testRoute(fastify,options){
    console.log("In test route");
    fastify.get('/ping',testController.pingRequest);
}

module.exports = testRoute;