var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('public'));

const DATABASE_NAME = 'Shuttle';
const MONGO_URL = "mongodb+srv://ramaty01:mypassword@cluster0-hi4fv.mongodb.net/test?retryWrites=true&w=majority";

let db = null;
let collection = null;

async function startServer() {
    client = await MongoClient.connect(MONGO_URL);
    db = client.db(DATABASE_NAME);
    coll = db.collection('Stations');

    await app.listen(3000);
    console.log('Listening on port 3000');
}

startServer();

app.get('/ccfront', async function(req, res) {
    console.log('helloo');
    const timeObj = {timea : 12, timeb : 14}
    res.json(timeObj);
})