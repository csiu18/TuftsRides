var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

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

async function getTime(stopName) {
    var today = new Date();
    var hour = today.getHours() - 3;
    var min = today.getMinutes();
    var index = 0;
    console.log("Current time: " + hour + ":" + min);

    if (stopName == '/ccfront') stopName = "Campus Center Professor Row";
    if (stopName == '/davissq') stopName = "Davis Square";
    if (stopName == '/ccback') stopName = "Campus Center Talbot Ave";
    if (stopName == '/carm') stopName = "Carmichael Hall";
    if (stopName == '/olin') stopName = "Olin Center";

    const stop = await coll.findOne({"station_name" : stopName});

    for (i = 0; i < stop.times.length; i++) {
        var h = stop.times[i].getHours() + 4;
        var m = stop.times[i].getMinutes();

        if (h == hour && m > min) {
            index = i; 
            break;
        } else if (h > hour) {
            index = i;
            break;
        }
    }

    var h1 = stop.times[index].getHours() + 4; 
    var m1 = stop.times[index].getMinutes();
    var h2 = stop.times[index + 1].getHours() + 4;
    var m2 = stop.times[index + 1].getMinutes();

    var diff1 = (h1 * 60 + m1) - (hour * 60 + min);
    var diff2 = (h2 * 60 + m2) - (hour * 60 + min);

    var timeObj = {"timea" : diff1, "timeb" : diff2}; 

    return timeObj;
}



startServer();

app.get('/ccfront', async function(req, res) {
    var timeObj = await getTime(req.path);
    console.log(timeObj);
    res.json(timeObj);
})

app.get('/davissq', async function(req, res) {
    var timeObj = await getTime(req.path);
    console.log(timeObj);
    res.json(timeObj);
})

app.get('/ccback', async function(req, res) {
    var timeObj = await getTime(req.path);
    console.log(timeObj);
    res.json(timeObj);
})

app.get('/carm', async function(req, res) {
    var timeObj = await getTime(req.path);
    console.log(timeObj);
    res.json(timeObj);
})

app.get('/olin', async function(req, res) {
    var timeObj = await getTime(req.path);
    console.log(timeObj);
    res.json(timeObj);
})