const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStop.setAttribute('disabled', 'true');

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', 'true');
  btnStop.removeAttribute('disabled');

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);

  btnStop.setAttribute('disabled', 'true');
  btnStart.removeAttribute('disabled');
});
