const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'),
  box = document.querySelector('.box');

const TODOS_LS = 'toDos';

function paintToDo(currentValue) {
  const li = document.createElement('li'),
    delBtn = document.createElement('button'),
    span = document.createElement('span');

  // 박스 div 보이게하기
  box.classList.add('active');

  // 리스트 생성
  delBtn.innerHTML = "<i class='far fa-times-circle'></i>";
  span.innerText = currentValue;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDoList() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    //
  }
}

function init() {
  loadToDoList();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();