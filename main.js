function createSnow(){
    let snow = document.getElementById('snow');
    let div = document.createElement('div');
    const largura = window.screen.width;
    let flakeSize = 30;
    div.classList.add('flakes');

    if(largura > 575 && largura < 720){
        flakeSize = 20;
    }else if(largura < 575){
        flakeSize = 10;
    }
    
    if((Math.random()*largura)-flakeSize < 0){
        div.style.left = 0 + 'px';
    } else {
        div.style.left = (Math.random()*largura)-flakeSize + 'px';
    }

    div.style.width = flakeSize + 'px';
    div.style.height = flakeSize + 'px';

    snow.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 22000);
}

setInterval(() => {
    createSnow();
    countDate();
}, 500);

//DATES COUNTER

let counterDate = new Date('dec 25, 2022 00:00:00').getTime();

function countDate(){
    let now = new Date().getTime();
    let gap = counterDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let day = Math.floor(gap / (days));
    let hour = Math.floor(gap % (days) / (hours));
    let minute = Math.floor(gap % (hours) / (minutes));
    let second = Math.floor(gap % (minutes) / (seconds));

    document.getElementById('days').innerHTML = day;
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
}

//ABRINDO O MENU HAMBURGUER
let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav');
let neve = document.getElementById('snow');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(navMenu.style.top == '0px'){
        neve.style.zIndex = '0';
        navMenu.style.top = '-2000px';
    }else{
        neve.style.zIndex = '-3';
        navMenu.style.top = '0px';
    }
});

navMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(navMenu.style.top == '0px'){
        neve.style.zIndex = '0';
        navMenu.style.top = '-2000px';
    }else{
        neve.style.zIndex = '-3';
        navMenu.style.top = '0px';
    }
});