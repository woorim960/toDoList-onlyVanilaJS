const menuBtn = document.querySelector('header .menuBtn'),
  menu = document.querySelector('.menu'),
  clockBtn = menu.querySelector('#clock'),
  stopWatchBtn = menu.querySelector('#stopWatch');

function stopWatchOn(event) {
  console.log(event);
  if(stopWatchBtn.className === "deActive") {
    // 비활성화 상태므로 아무런 동작도 일어나면 안된다.
  } else {
    // 활성화 동작 수행
    stopWatchBtn.classList.add("deActive");
    clockBtn.classList.remove("deActive");
  }
}

function clockOn(event) {
  console.dir(clockTitle);
  if(clockBtn.className === "deActive") {
    // 비활성화 상태므로 아무런 동작도 일어나면 안된다.
  } else {
    // 활성화 동작 수행
    clockBtn.classList.add("deActive");
    stopWatchBtn.classList.remove("deActive");
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
  clockBtn.addEventListener('click', clockOn);
  stopWatchBtn.addEventListener('click', stopWatchOn);
}

init();