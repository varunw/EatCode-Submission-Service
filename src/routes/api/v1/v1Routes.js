async function v1Plugin(fastify,options){
    console.log("In V1Plugin");
    // fastify.register(require('./test/testRoutes'),{prefix:'/test'});
    fastify.register(require('./submissionRoutes'),{prefix:'/submission'});
    // fastify.get('/ping',(req,res)=>{
    //     res.send({data:'pong'});
    // })
}

module.exports = v1Plugin;