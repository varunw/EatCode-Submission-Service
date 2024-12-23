const fastify = require('fastify')({logger:true});

const PORT = 5000;

const app = require('./app');

fastify.register(app);

fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server up on port ${PORT}`);
})