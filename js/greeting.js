const form = document.querySelector(".js-form"),
  input = form.querySelector('input'),
  greeting = document.querySelector('.greeting');

const USER_LS = 'currentUser',
  SHOWING_ON = 'showing';

function saveName(currentUser) {
  localStorage.setItem(USER_LS, currentUser);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = input.value;
  paintGreeting(currentUser);
  saveName(currentUser);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(currentUser) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerHTML = `User : ${currentUser}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();