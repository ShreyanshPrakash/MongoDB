const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
const url = `mongodb://localhost:27017`;

async function connectToDatabase(database) {

    try{
        let client = await mongoClient.connect(url + database , { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connetct to Db")
        return client;
    }catch( err ){
        console.log("Error while connecting to the mongodDB");
        console.error(err);
        return new throwError("Connection issue");
    }

}

async function getAllDoctors() { 

    try {
        let client = await connectToDatabase();
        if (client) {
            let newDb = await client.db('professions');
            let newColl = await newDb.createCollection('doctor');
            let newDoc = await newColl.insertOne({name: "Shreyansh"});
            return newDb;
        }
    } catch (err) {
        console.log(err);
        console.trace();
        return err;
    } finally {

    }

}

module.exports = { getAllDoctors };