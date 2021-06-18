import documentReady from '../../../helpers/documentReady';

// Description:
// 2.Написать функцию, которая выводит все числа из заданного пользователем диапазона
//   в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

const taskRun = () => {
  const form = document.querySelector('.task-2');
  if (form === null) return;
  const rangeMin = form.querySelector('.task-2__range-min');
  const labelMin = form.querySelector('.task-2__label-min');
  const rangeMax = form.querySelector('.task-2__range-max');
  const labelMax = form.querySelector('.task-2__label-max');
  const result = form.querySelector('.task-2__result');

  const rangeNumbers = (a, b, acc = []) => {
    if (a === b) {
      acc.push(b);
      return acc;
    }
    acc.push(a);
    return rangeNumbers(a + 1, b, acc);
  };

  const ascHandler = () => rangeNumbers(+rangeMin.value, +rangeMax.value);
  const descHandler = () => ascHandler().reverse();

  new Map([
    ['min', { range: rangeMin, label: labelMin }],
    ['max', { range: rangeMax, label: labelMax }],
  ]).forEach((v, k, m) => {
    m.get(k).label.textContent = m.get(k).range.value;
    v.range.addEventListener('input', (e) => {
      m.get(k).label.textContent = e.target.value;
      if (k === 'max') {
        m.get('min').range.max = e.target.value;
        m.get('min').label.textContent = m.get('min').range.value;
      }
    });
  });

  new Map([
    ['asc', {
      btn: form.querySelector('.task-2__btn-asc'),
      handler: () => {
        result.textContent = ascHandler().toString();
      },
    }],
    ['dest', {
      btn: form.querySelector('.task-2__btn-desc'),
      handler: () => {
        result.textContent = descHandler().toString();
      },
    }],
  ]).forEach((v) => {
    v.btn.addEventListener('click', v.handler);
  });
};

export default () => documentReady(taskRun);

/*
// 3.Написать функцию, которая выводит переданное ей число задом наперед.
//   Например: число 1234 вывести как 4321.

//

// 4.Написать функцию, которая считает сумму цифр числа.
//   Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

//

// 5.Написать функцию, которая принимает число и выводит соответствующее количество
//   вложенных пар круглых скобок. Например: число 4 – (((()))).
*/
