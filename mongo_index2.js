var http = require('http');
var url = require('url');
var input = "";
var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
//var min = 58;
const MongoClient = require('mongodb').MongoClient;
const url2 = "mongodb+srv://ramaty01:mypassword@cluster0-hi4fv.mongodb.net/test?retryWrites=true&w=majority";

http.createServer(function(req, res){
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  //var qobj = url.parse(req.url, true).query;
  
  //var items;
  
  
  res.write("Current time: " + hour + ":" + min + "<br><br>");
  
  mong();
  
  res.write(input);
  res.end()
  input= "";
}).listen(8080);

function mong(){
    
MongoClient.connect(url2, { useUnifiedTopology: true }, function(err, db) {
    if(err) { console.log("Connection err: " + err); return; }
    var dbo = db.db("Shuttle");
    var coll = dbo.collection('Stations');
    //var query;
    // var inp = qobj.txt;
    // if (qobj.types == "company") {
    //   query = { "company_name" : inp};
    // } else if (qobj.types == "stock") {
    //   query = { "stock_ticker" : inp};
    // }
    
    var s = coll.find({},{projection: {"station_name":1, "times" :1, "_id":0}}).stream();
    var time_change = 0;
    var print = 0;
    s.on("data", function(item) {
        for (var i=0; i < item.times.length; i++) {
            //input = input + "input: " + (item.times[i].getHours() + 4) + ":" + item.times[i].getMinutes() + "<br>";
            if (item.times[i].getHours() + 4 == hour) {
                if (item.times[i].getMinutes() > min) {
                    input = input + item.station_name + " " + (item.times[i].getHours() + 4) + ":" + item.times[i].getMinutes() + "<br>";
                    //input = input + item.station_name + " " + (item.times[i+1].getHours() + 4) + ":" + item.times[i+1].getMinutes() + "<br>";
                    print = 1;
                    console.log("print1");
                    break;
                }
                if (print == 0) {
                    console.log("print0");
                    //input = input + item.station_name + " " + (item.times[i+1].getHours() + 4) + ":" + item.times[i+1].getMinutes() + "<br>";
                    //input = input + item.station_name + " " + (item.times[i+2].getHours() + 4) + ":" + item.times[i+2].getMinutes() + "<br>";
                }
            }  
        }  
    });
    s.on("end", function() {  db.close();});
  });
}

