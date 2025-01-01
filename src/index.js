const fastify = require('fastify')({logger:true});


const connectToDb = require('./config/dbConfig');
const app = require('./app');
const { PORT } = require('./config/serverConfig');

const PORT = PORT;

fastify.register(app);

fastify.listen({port:PORT},async (err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }

    await connectToDb();
    console.log(`Server up on port ${PORT}`);
})