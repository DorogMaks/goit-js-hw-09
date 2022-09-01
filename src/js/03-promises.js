import { Notify } from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  inputEl: document.querySelector('input'),
};

refs.inputEl.setAttribute('min', '0');

const { delay, step, amount } = refs.formEl.elements;
delay.setAttribute('step', '250');
step.setAttribute('step', '250');

refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  let delayValue = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += Number(step.value);
  }

  refs.formEl.reset();
}

// _________________________________________________________________________________
// import Notiflix from 'notiflix';

// const refs = {
//   formEl: document.querySelector('.form'),
//   inputEl: document.querySelector('input'),
//   inputDelay: document.querySelector('input[name="delay"]'),
//   inputStep: document.querySelector('input[name="step"]'),
//   inputAmount: document.querySelector('input[name="amount"]'),
//   btnCreatePromises: document.querySelector('button[type="submit"]'),
// };

// refs.inputEl.setAttribute('min', '0');
// refs.inputDelay.setAttribute('step', '250');
// refs.inputStep.setAttribute('step', '250');

// refs.btnCreatePromises.addEventListener('click', onBtnCreatePromisesClick);

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });

//   return promise;
// }

// function onBtnCreatePromisesClick(evt) {
//   evt.preventDefault();

//   let firstDelay = Number(refs.inputDelay.value);
//   let delayStep = Number(refs.inputStep.value);
//   const amount = Number(refs.inputAmount.value);

//   for (let i = 0; i < amount; i += 1) {
//     createPromise(1 + i, firstDelay + i * delayStep)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }

//   if (refs.inputDelay.value && refs.inputStep.value && refs.inputAmount.value) {
//     refs.formEl.reset();
//   }
// }
//
