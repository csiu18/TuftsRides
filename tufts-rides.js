const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const DATABASE_NAME = 'Shuttle';
const MONGO_URL = "mongodb+srv://ramaty01:mypassword@cluster0-hi4fv.mongodb.net/test?retryWrites=true&w=majority";

let db = null;
let coll = null;

async function startServer() {
    client = await MongoClient.connect(MONGO_URL, {useUnifiedTopology: true});
    db = client.db(DATABASE_NAME);
    coll = client.db(DATABASE_NAME).collection('Stations');

    await app.listen(PORT);
    console.log('Listening on port ' + PORT);

}

async function getTime(stopName) {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    //var hour = 3;
    var min = today.getMinutes();
    var index = 0;
    var timeObj;

    if (stopName == "CC_P_Row") {
        if ((day == 1 | day == 2 | day == 3) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 4 & hour < 7) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 5 & hour < 7 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & hour < 10 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
         } else if (day == 0 & (hour > 22 | hour < 10)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
    } 
    }

    if (stopName == "Davis") {
        if ((day == 1 | day == 2 | day == 3) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 4 & hour < 7) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 5 & hour < 7 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & hour < 10 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
         } else if (day == 0 & (hour > 22 | hour < 10)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
    } 
    }

    if (stopName == "CC_Talbot") {
        if ((day == 1 | day == 2 | day == 3) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 4 & hour < 7) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 5 & hour < 7 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & hour < 10 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
         } else if (day == 0 & (hour > 22 | hour < 10)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
    } 
    }

    if (stopName == "Carm") {
        if ((day == 1 | day == 2 | day == 3) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 4 & hour < 7) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 5 & hour < 7 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & hour < 10 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
         } else if (day == 0 & (hour > 22 | hour < 10)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
    } 
    }

    if (stopName == "Olin") {
        if ((day == 1 | day == 2 | day == 3) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 4 & hour < 7) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 5 & hour < 7 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & hour < 10 & hour > 1) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
         } else if (day == 0 & (hour > 22 | hour < 10)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
    } 
    }

    if (stopName == "SMFA") {
        if ((day == 1 | day == 2 | day == 3 | day == 4 | day == 5) & (hour > 22 | hour < 7)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & (hour < 8 | hour > 12)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        }
    } 


    if (stopName == "Aidekmann") {
        if ((day == 1 | day == 2 | day == 3 | day == 4 | day == 5) &  hour < 6) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        } else if (day == 6 & (hour < 7 | hour > 11)) {
            timeObj = {"timea" : ". . .", "timeb" : ". . ."};
            return timeObj;
        }
    } 




    //console.log(stopName + " Current time: " + hour + ":" + min);

    var stop = await coll.findOne({"stname" : stopName});
    var stopObj = getDay(day, stop);

    for (i = 0; i < stopObj.length; i++) {
        var h = stopObj[i].getHours() + 4;
        var m = stopObj[i].getMinutes();

        if (h == hour && m >= min) {
            index = i; 
            break;
        } else if (h > hour) {
            index = i;
            break;
        }
    }

    h1 = stopObj[index].getHours() + 4; 
    m1 = stopObj[index].getMinutes();
    diff1 = (h1 * 60 + m1) - (hour * 60 + min);
    diff2 = ". . .";

    if (index != stopObj.length - 1) {
       h2 = stopObj[index + 1].getHours() + 4;
       m2 = stopObj[index + 1].getMinutes();
       diff2 = (h2 * 60 + m2) - (hour * 60 + min);
    }
    
    timeObj = {"timea" : diff1, "timeb" : diff2}; 
    // console.log(timeObj);

    return timeObj;
}

function getDay(day, stop) {
    // day = 1; // for testing purposes 

    if (day == 1) return stop.times_mon;
    if (day == 2) return stop.times_tues;
    if (day == 3) return stop.times_wed;
    if (day == 4) return stop.times_thurs;
    if (day == 5) return stop.times_fri;
    if (day == 6) return stop.times_sat;
    if (day == 0) return stop.times_sun;
}

startServer();

app.get('/CC_P_Row', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/Davis', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/CC_Talbot', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/Carm', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/Olin', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/SMFA', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})

app.get('/Aidekmann', async function(req, res) {
    var stop = (req.path).substring(1);
    var timeObj = await getTime(stop);
    res.json(timeObj);
})