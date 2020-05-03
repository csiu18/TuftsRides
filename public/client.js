var results = null, results2 = null, stop = null, query = null;

function getResults(){
    query = (document.querySelector('.query').value).toLowerCase();
    results = document.querySelector('.results');
    background = document.querySelector('.background');
    oldHeight = (background.style.height).substring(0,4);
    background.style.height = "1900px";

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
    } else { 
        newHeight = parseInt(oldHeight) + 75;
        background.style.height = newHeight + "px";
        results.innerHTML = "<p class='no-results'>Stop was not found!</p>";
    }
}

function displayFavs() { 
    var x = document.querySelector("#FAVE");
    var y = document.querySelector('.background');
    var up = document.querySelector('#up');
    var down = document.querySelector('#down');
    var faveStops = getFavArray();
    var oldHeight = (y.style.height).substring(0,4);

    var height = faveStops.length * 180 + 40 + parseInt(oldHeight);
    var newHeight = "" + height + "px"; 

    if (x.style.display === "none") {
        down.style.display = "none";
        up.style.display = "block";
        x.style.display = "block";
        y.style.height = newHeight;
    } else {
        down.style.display = "block";
        up.style.display = "none";
        y.style.height = "1500px";
        x.style.display = "none";
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
    if (time == ". . ." || time < 0) return ". . .";
    else if (time >= 60) {
        if (time > 200) return ". . .";
        else return "1 hr+";
   } else return time + " min";
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

const interval = setInterval(function() {
    getData();
    
    if (document.querySelector('.query').value != "") 
        results.innerHTML = stop.outerHTML;

    var faveStops = getFavArray();
    var str = "";

    var x = document.querySelector("#FAVE");
    var y = document.querySelector('.background');
    query = (document.querySelector('.query').value).toLowerCase();
    height = faveStops.length * 180 + 1540;
    var newHeight = "" + height + "px";

    if (query != "") {
        height += 170;
        newHeight = "" + height + "px";
    }

    y.style.height = newHeight;

    if (x.style.display == "none") {
        y.style.height = "1500px";
        if (query != "") y.style.height = "1700px";
    }

    var stopp = "";

    for(var i = 0; i < faveStops.length; i++){
        if (faveStops[i] == "CAMPUS CENTER FRONT") {
            stopp = document.querySelector('#stop1').outerHTML; 
            index = stopp.search('id="stop1"');
            stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "DAVIS SQUARE") {
            stopp = document.querySelector('#stop2').outerHTML; 
            index = stopp.search('id="stop2"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "CAMPUS CENTER BACK") {
            stopp = document.querySelector('#stop3').outerHTML; 
            index = stopp.search('id="stop3"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "CARMICHAEL HALL") {
            stopp = document.querySelector('#stop4').outerHTML; 
            index = stopp.search('id="stop4"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "OLIN HALL") {
            stopp = document.querySelector('#stop5').outerHTML; 
            index = stopp.search('id="stop5"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "AIDEKMANN") {
            stopp = document.querySelector('#stop6').outerHTML; 
            index = stopp.search('id="stop6"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        } else if (faveStops[i] == "SMFA") {
            stopp = document.querySelector('#stop7').outerHTML; 
            index = stopp.search('id="stop7"');
            stopp = stopp.substring(0, index) + stopp.substring(index + 10);
        }
        str += stopp;
    }
    document.getElementById("FAVE").innerHTML = str; 
 }, 1000);