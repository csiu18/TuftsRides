const time1a = document.querySelector('.time1a');
const time1b = document.querySelector('.time1b');

async function getData() {
    const response = await fetch('/ccfront');
    const timeObj = await response.json();
    time1a.innerHTML = timeObj.timea + ' min';
    time1b.innerHTML = timeObj.timeb + ' min';
}

getData();