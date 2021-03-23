setInterval(setClock, 1000);

const handHour = document.querySelector('[data-hand-hour]');
const handMinute = document.querySelector('[data-hand-minute]');
const handSecond = document.querySelector('[data-hand-second]');

function setClock() {
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds() / 60;
    const currentMinute = (currentSecond + currentDate.getMinutes())/60;
    const currentHour = (currentMinute + currentDate.getHours()) / 12;

    setRatio(handHour, currentHour);
    setRatio(handMinute, currentMinute);
    setRatio(handSecond, currentSecond);
}

function setRatio(element, ratio) {
    element.style.setProperty('--rotation', ratio * 360)
}
setClock();