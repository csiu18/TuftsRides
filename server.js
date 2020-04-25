var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
var url = require('url');

app.use(express.static('public'));

const DATABASE_NAME = 'Shuttle';
const MONGO_URL = "mongodb+srv://ramaty01:mypassword@cluster0-hi4fv.mongodb.net/test?retryWrites=true&w=majority";

let db = null;
let coll = null;

async function startServer() {
    client = await MongoClient.connect(MONGO_URL);
    db = client.db(DATABASE_NAME);
    coll = db.collection('Stations');

    await app.listen(3000);
    console.log('Listening on port 3000');
}

startServer();

async function getTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var index = 0;
    console.log("Current time: " + hour + ":" + min);

    const stop = await coll.findOne({"station_name" : "Campus Center Professor Row"});

    // for (i = 0; i < stop.times.length; i++) {
    //     var h = stop.times[i].getHours();
    //     var m = stop.times[i].getMinutes();
    //     console.log(h + ":" + m);

    //     if (h == hour) {
    //         if (m > min) {
    //             index = i; 
    //             break;
    //         }
    //     } else if (h > hour) {
    //         index = i;
    //         break;
    //     }
    // }

    // compute time diff of times[i] & times[i+1]
    // make json obj of two differences
}

getTime();

app.get('/ccfront', async function(req, res) {
    // call function to pass in stop and returns json object of two times
    console.log(req.path); // gets path of url
    const timeObj = {timea : 12, timeb : 14}
    res.json(timeObj);
})