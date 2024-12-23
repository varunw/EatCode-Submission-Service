async function apiPlugin(fastify,options){
    console.log("In api plugin");
    fastify.register(require('./v1/v1Routes'),{prefix:'/v1'});
    // fastify.get('/ping',(req,res)=>{
    //     res.send({data:"Pong"});
    // })
}

module.exports = apiPlugin;