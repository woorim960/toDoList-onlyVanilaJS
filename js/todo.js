const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'),
  box = document.querySelector('.box');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  const btn = event.target.parentNode,
    li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDOs();
  if (toDos.length < 1) box.classList.remove('active');
}

function saveToDOs() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(currentValue) {
  const li = document.createElement('li'),
    delBtn = document.createElement('button'),
    span = document.createElement('span');

  const newId = toDos.length + 1;

  // 삭제 버튼 클릭시 지우기
  delBtn.addEventListener('click', deleteToDo);

  // 박스 div 보이게하기
  box.classList.add('active');

  // 리스트 생성
  delBtn.innerHTML = "<i class='far fa-times-circle'></i>";
  span.innerText = currentValue;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    id : newId,
    text : currentValue,
  };
  toDos.push(toDoObj);
  
  saveToDOs();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDoList() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDos) {
      paintToDo(toDos.text);
    });
  }
}

function init() {
  loadToDoList();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();