var results = null;
var stop = null;
var query = null;

function getResults(){
    query = document.querySelector('.query').value;
    query = query.toLowerCase();
    results = document.querySelector('.results');
    background = document.querySelector('.background');

    // results.style.height = "340px";
    background.style.height = "1700px";

    // have to query for rest of stops
    if (query == "campus center front") {
        stop = document.querySelector('#stop1');
        results.innerHTML = stop.outerHTML;
    } else if (query.search("davis") > -1) {
        stop = document.querySelector('#stop2');
        results.innerHTML = stop.outerHTML;
    } else if (query == "campus center back") {
        stop = document.querySelector('#stop3');
        results.innerHTML = stop.outerHTML;
    } else if (query.search("carm") > -1) {
        stop = document.querySelector('#stop4');
        results.innerHTML = stop.outerHTML;
    } else if (query.search("olin") > -1) {
        stop = document.querySelector('#stop5');
        results.innerHTML = stop.outerHTML;
    } else if (query.search("aidek") > -1) {
        stop = document.querySelector('#stop6');
        results.innerHTML = stop.outerHTML;
    } else if (query == "smfa") {
        stop = document.querySelector('#stop7');
        results.innerHTML = stop.outerHTML;
    }
}

// y height will change depending on how many fav stops there are
// +200px for each stop
function displayFavs() {
    var x = document.getElementById("favstop");
    var y = document.getElementById("background");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.height = "1700px";
    } else {
        x.style.display = "none";
        y.style.height = "1500px";
    }   
}

const time1a = document.querySelector('.time1a');
const time1b = document.querySelector('.time1b');
const time2a = document.querySelector('.time2a');
const time2b = document.querySelector('.time2b');
const time3a = document.querySelector('.time3a');
const time3b = document.querySelector('.time3b');
const time4a = document.querySelector('.time4a');
const time4b = document.querySelector('.time4b');
const time5a = document.querySelector('.time5a');
const time5b = document.querySelector('.time5b');
const time6a = document.querySelector('.time6a');
const time6b = document.querySelector('.time6b');
const time7a = document.querySelector('.time7a');
const time7b = document.querySelector('.time7b');

function getTime(time) {
    if (time >= 60) return "1  hr+"
    else return time + " min";
}

async function getData() {
    var response = await fetch('/CC_P_Row');
    var timeObj = await response.json();
    time1a.innerHTML = getTime(timeObj.timea);
    time1b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/Davis');
    timeObj = await response.json();
    time2a.innerHTML = getTime(timeObj.timea);
    time2b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/CC_Talbot');
    timeObj = await response.json();
    time3a.innerHTML = getTime(timeObj.timea);
    time3b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/Carm');
    timeObj = await response.json();
    time4a.innerHTML = getTime(timeObj.timea);
    time4b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/Olin');
    timeObj = await response.json();
    time5a.innerHTML = getTime(timeObj.timea);
    time5b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/Aidekmann');
    timeObj = await response.json();
    time6a.innerHTML = getTime(timeObj.timea);
    time6b.innerHTML = getTime(timeObj.timeb);

    response = await fetch('/SMFA');
    timeObj = await response.json();
    time7a.innerHTML = getTime(timeObj.timea);
    time7b.innerHTML = getTime(timeObj.timeb);
}

getData();
if (document.querySelector('.query').value != "") 
   results.innerHTML = stop.outerHTML;

const interval = setInterval(function() {
    getData();
    if (document.querySelector('.query').value != "") 
        results.innerHTML = stop.outerHTML;
 }, 100);