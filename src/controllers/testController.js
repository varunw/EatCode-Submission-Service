const testService = require('../services/testService');

async function pingRequest(req,res){
    // console.log(this.testService);
    console.log("In Ping request");
    const response = await testService.pingCheck();
    return res.send({data:response});
}

module.exports = {pingRequest};