const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');

async function connectToDb(){
    try {
        if(NODE_ENV=="developement"){
            await mongoose.connect(ATLAS_DB_URL);
        }
        
    } catch (error) {
        console.log("Unable To connect to DB Server");
        console.log(error);
    }
}

module.exports = connectToDb;