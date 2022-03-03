const items = document.querySelectorAll('.countdown-item > h4');

//назначаем дату отсчета 
let countdownDate = new Date(2022, 04, 03, 0, 0)


//считаем в милисекундах с помощью getTime
//1с = 1000мс 1м = 60к 1ч = 60*60к


function getTime(){
    const timeNow = new Date().getTime(); //получаем текущее время

    const distnce = countdownDate - timeNow; //находим разницу во времени

    const oneDay = 24 * 60 * 60 * 1000; //один день в милисекундах
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000; 

    let days = Math.floor(distnce / oneDay);
    let hours = Math.floor(distnce % oneDay / oneHour);
    let minuts = Math.floor(distnce % oneHour / oneMinute);
    let seconds = Math.floor(distnce % oneMinute / 1000);

    let values = [
        days,
        hours,
        minuts,
        seconds,
    ];
    console.log(values);

items.forEach(function(item, index){
    item.textContent = (values[index]);
})

}

//обновление счетчика каждую секунду
let countdown = setInterval(getTime, 1000);

