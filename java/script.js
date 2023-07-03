const body = document.querySelector('body');
const h4 = document.querySelector('h4');
const cont = document.querySelector('p');

const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');
body.classList.toggle('light-mode');
body.classList.toggle('default');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

modeStatus.innerText = "Currently in " + modeMessage;

  }

modeToggle.addEventListener('click', toggleMode);

const addTaskBtn = document.getElementById('add-task');
const input = document.querySelector('input');
const taskList = document.querySelector('#task-list');
let taskId = 0;
let randomImgId = 1

const addTask = (task) => {
  const taskItem = document.createElement('div');
  taskItem.classList.add('form-check', 'd-flex', 'align-items-center', 'gap-3');
  taskItem.innerHTML = `
    <input class="task-check" type="checkbox" id="task-${taskId}">
    <label class="task-check-label" for="task-${taskId}">${task}</label>
    <button type="button" class="btn-close" aria-label="Close" data-task-id="${taskId}"></button>
  `;
  taskList.appendChild(taskItem);
  taskId++;
}

const removeTask = (taskId) => {
  const taskItem = document.querySelector(`#task-${taskId}`).parentNode;
  taskList.removeChild(taskItem);
}

addTaskBtn.addEventListener('click', () => {
  const task = input.value.trim();
  const taskWithImg = `<img class="me-3" src="https://picsum.photos/50/50?random=${randomImgId}"> <span>${task}</span>`;


  if (task !== '') {
    addTask(taskWithImg);
    input.value = '';
    randomImgId++;
  }
});

taskList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.task-check')) {
    const label = target.parentNode.querySelector('label');
    if (target.checked) {
      label.classList.add('text-decoration-line-through');
    } else {
      label.classList.remove('text-decoration-line-through');
    }
  } else if (target.matches('.btn-close')) {
    const taskId = target.getAttribute('data-task-id');
    removeTask(taskId);
  }
});

const images = document.querySelectorAll('#slider img');

let currentIndex = 0;

function reset() {
  for (let i = 0; i <images.length; i++){
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active'); 
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if(currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializeSlider();

document.querySelector('#prev').addEventListener('click',function() {
  slideLeft();
});

document.querySelector('#next').addEventListener('click',function(){
  slideRight();
});

