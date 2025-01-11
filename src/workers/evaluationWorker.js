const { Worker } = require("bullmq");
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
function evaluationWorker(queue){
     new Worker('EvaluationQueue',async job => {
        if(job.name==='EvaluationJob'){
            const response = await axios.post('http://localhost:3000/sendPayload',{
                userId:job.data.userId,
                payload:job.data
            });
            console.log(job.data);
        }
    },{
        connection:redisConnection
    });
}

module.exports = evaluationWorker;