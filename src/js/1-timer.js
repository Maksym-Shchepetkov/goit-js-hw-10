import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/custom-calendar.css';

const inputDate = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');

const daysValue = document.querySelector('span[data-days]');

const hoursValue = document.querySelector('span[data-hours]');

const minutesValue = document.querySelector('span[data-minutes]');

const secondsValue = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    const now = new Date();

    if (userSelectedDate < now) {
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        timeout: 20000,
      });

      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

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
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  inputDate.disabled = true;

  const countdown = setInterval(() => {
    const now = new Date();
    const distance = userSelectedDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      daysValue.textContent = '00';
      hoursValue.textContent = '00';
      minutesValue.textContent = '00';
      secondsValue.textContent = '00';
      iziToast.success({
        title: 'OK',
        message: 'Successfully completed',
        position: 'topRight',
        timeout: 20000,
      });
      inputDate.disabled = false;
      return;
    }

    const time = convertMs(distance);
    daysValue.textContent = addLeadingZero(time.days);
    hoursValue.textContent = addLeadingZero(time.hours);
    minutesValue.textContent = addLeadingZero(time.minutes);
    secondsValue.textContent = addLeadingZero(time.seconds);
  }, 1000);
});
