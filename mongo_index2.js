var http = require('http');
var url = require('url');
var input = "";
var timess = "";
var today = new Date();
var hour = today.getHours();
// var hour = 10;
var min = today.getMinutes();
//var min = 59;
const MongoClient = require('mongodb').MongoClient;
const url2 = "mongodb+srv://ramaty01:mypassword@cluster0-hi4fv.mongodb.net/test?retryWrites=true&w=majority";

http.createServer(function(req, res){
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    return;
  }

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current time: " + hour + ":" + min + "<br><br>");
  mong();
  res.write(input);
  res.end()
  input= "";
  timess = "";
}).listen(8080);

function mong(){
    
MongoClient.connect(url2, { useUnifiedTopology: true }, function(err, db) {
    if(err) { console.log("Connection err: " + err); return; }
    var dbo = db.db("Shuttle");
    var coll = dbo.collection('Stations');
    var s = coll.find({},{projection: {"station_name":1, "times" :1, "_id":0}}).stream();
    var time_change = 0;
    var print = 0;
    s.on("data", function(item) {
        print = 0;
        for (var i=0; i < item.times.length; i++) {
            if (item.times[i].getHours() + 4 == hour) {
                if (item.times[i].getMinutes() > min) {
                    input = input + item.station_name + " " + (item.times[i].getHours() + 4) + ":" + item.times[i].getMinutes() + "<br>";
                    var j = i+1;
                    input = input + item.station_name + " " + (item.times[j].getHours() + 4) + ":" + item.times[j].getMinutes() + "<br>";
                    print = 1;
                    console.log("print1");
                    break;
                } else if (item.times[i].getMinutes() < min) {
                    print = 0;
                } 
            }  
            if (item.times[i].getHours() + 4 > hour & print === 0) {
                    console.log("print0");
                    var k = i + 1;
                    input = input + item.station_name + " " + (item.times[i].getHours() + 4) + ":" + item.times[i].getMinutes() + "<br>";
                    input = input + item.station_name + " " + (item.times[k].getHours() + 4) + ":" + item.times[k].getMinutes() + "<br>";
                    print = 1;
                    break;
                }
        }  
    });
    s.on("end", function() {  db.close();});
  });
}

