const menuBtn = document.querySelector('header .menuBtn'),
  menu = document.querySelector('.menu'),
  clockBtn = menu.querySelector('#clock'),
  stopWatchBtn = menu.querySelector('#stopWatch');


let hourSwt = 0,
  minuteSwt = 0,
  secondSwt = 0;

let getStopWatch;

function stopWatchOn() {
  secondSwt += 1;
  if(secondSwt >= 60) {
    secondSwt = 0;
    minuteSwt += 1;
  }
  if(minuteSwt >= 60) {
    minuteSwt = 0;
    hourSwt += 1;
  }
  clockTitle.innerText = `${
    hourSwt < 10 ? `0${hourSwt}` : hourSwt
  } : ${
    minuteSwt < 10 ? `0${minuteSwt}` : minuteSwt
  } : ${
    secondSwt < 10 ? `0${secondSwt}` : secondSwt
  }`;
}

function stopWatchActive(event) {
  console.log(event);
  if(stopWatchBtn.className === "deActive") {
    // 비활성화 상태므로 아무런 동작도 일어나면 안된다.
  } else {
    // 활성화 동작 수행
    stopWatchBtn.classList.add("deActive");
    clockBtn.classList.remove("deActive");

    // 시계 종료
    clearInterval(getClock);

    // 스탑워치 실행
    hourSwt = 0;
    minuteSwt = 0;
    secondSwt = 0;
    clockTitle.innerText = "00 : 00 : 00"
    getStopWatch = setInterval(stopWatchOn, 1000);
  }
}

function clockActive(event) {
  console.dir(clockTitle);
  if(clockBtn.className === "deActive") {
    // 비활성화 상태므로 아무런 동작도 일어나면 안된다.
  } else {
    // 활성화 동작 수행
    clockBtn.classList.add("deActive");
    stopWatchBtn.classList.remove("deActive");

    // 시계 실행
    clearInterval(getStopWatch);
    getTime();
    getClock = setInterval(getTime, 300);
  }
}

function showMenu() {
  if(menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function init() {
  menuBtn.addEventListener('click', showMenu);
  clockBtn.addEventListener('click', clockActive);
  stopWatchBtn.addEventListener('click', stopWatchActive);
}

init();