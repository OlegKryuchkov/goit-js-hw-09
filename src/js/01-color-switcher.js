const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
//вешаю слушатель событий на кнопки
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
//создаю функции
function onStartBtnClick(event) {
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  startBtn.disabled = true;
}

function onStopBtnClick(event) {
  clearInterval(timerId);
  startBtn.disabled = false;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

//Функция дана в условии ДЗ
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
