import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 20000,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        timeout: 20000,
      });
    })
    .finally(() => {
      form.elements.delay.value = '';
    });
});
