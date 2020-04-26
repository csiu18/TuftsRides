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

async function getData() {
    var response = await fetch('/ccfront');
    var timeObj = await response.json();
    time1a.innerHTML = timeObj.timea + ' min';
    time1b.innerHTML = timeObj.timeb + ' min';

    console.log("davis");
    response = await fetch('/davissq');
    timeObj = await response.json();
    time2a.innerHTML = timeObj.timea + ' min';
    time2b.innerHTML = timeObj.timeb + ' min';

    console.log("back");
    response = await fetch('/ccback');
    timeObj = await response.json();
    time3a.innerHTML = timeObj.timea + ' min';
    time3b.innerHTML = timeObj.timeb + ' min';

    console.log("carm");
    response = await fetch('/carm');
    timeObj = await response.json();
    time4a.innerHTML = timeObj.timea + ' min';
    time4b.innerHTML = timeObj.timeb + ' min';

    console.log("olin");
    response = await fetch('/olin');
    timeObj = await response.json();
    time5a.innerHTML = timeObj.timea + ' min';
    time5b.innerHTML = timeObj.timeb + ' min';

    // response = await fetch('/aidekman');
    // timeObj = await response.json();
    // time6a.innerHTML = timeObj.timea + ' min';
    // time6b.innerHTML = timeObj.timeb + ' min';

    // response = await fetch('/smfa');
    // timeObj = await response.json();
    // time7a.innerHTML = timeObj.timea + ' min';
    // time7b.innerHTML = timeObj.timeb + ' min';
}

getData();