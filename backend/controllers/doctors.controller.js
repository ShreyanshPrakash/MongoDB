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
            // let newDoc = await newColl.insertOne({name: "Shreyansh"});
            let allDOcs = await newColl.insertMany(
                   generateQuery()
            )
            generateQuery();
            return newDb;
        }
    } catch (err) {
        console.log(err);
        console.trace();
        return err;
    } finally {

    }

}


function generateQuery(){
    let docs = [];
    for( let i = 0; i < 100; i++ ){
        let newDoc = {};
        newDoc.name = `Shreyansh-${i}`;
        newDoc.age = parseInt( Math.random() * 4 + 25 );
        newDoc.id = parseInt( Math.random() * 12565987 );
        docs = [ ...docs, newDoc ];
    }
    return docs;
}

module.exports = { getAllDoctors };