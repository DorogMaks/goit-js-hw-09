import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

refs.btnStart.addEventListener('click', onBtnStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] < new Date()
      ? Notiflix.Notify.failure('Please choose a date in the future')
      : (refs.btnStart.disabled = false);
  },
};

flatpickr(refs.inputDate, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function onBtnStartClick() {
  let timer = setInterval(() => {
    refs.btnStart.disabled = true;

    let countdown = new Date(refs.inputDate.value) - new Date();
    let time = convertMs(countdown);

    if (countdown >= 0) {
      refs.days.textContent = addLeadingZero(time.days);
      refs.hours.textContent = addLeadingZero(time.hours);
      refs.minutes.textContent = addLeadingZero(time.minutes);
      refs.seconds.textContent = addLeadingZero(time.seconds);
    } else {
      clearInterval(timer);
      Notiflix.Notify.success('Countdown finished');
    }
  }, 1000);
}
