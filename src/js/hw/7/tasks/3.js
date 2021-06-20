import documentReady from '../../../helpers/documentReady';

// Description:
// 3.Написать функцию, которая выводит переданное ей число задом наперед.
//   Например: число 1234 вывести как 4321.

// v.1
// = (num) => num.split('').reverse().join('');

// #region v.2
const reverseInt = (num, acc = []) => {
  if (num < 10) {
    acc.push(num);
    return acc;
  }
  const float = num / 10;
  const digit = Math.round((float % 1) * 10);
  acc.push(digit);
  return acc.concat(reverseInt(Math.trunc(float)));
};

// floating point numbers supported
const decimalCount = (num) => {
  const str = num.toString();
  return str.includes('.') ? {
    length: str.split('.')[1].length,
    decimal: str.split('.')[1],
  } : null;
};

const reverseNumber = (num) => {
  const float = decimalCount(num);
  if (float?.length > 0) {
    const res = reverseInt(float.decimal);
    res.push('.');
    reverseInt(Math.trunc(num)).forEach((n) => res.push(n));
    return res.join('');
  }
  return reverseInt(num).join('');
};
// #endregion v.2

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-3');
  if (task === null) return;
  task.open = taskOpen;

  const number = task.querySelector('.task-3__textbox');
  number.value = Math.floor(Math.random() * 10000 + 10)
    + (Math.floor(Math.random() * 100) / 100); // decimal
  const btn = task.querySelector('.task-3__btn');
  const result = task.querySelector('.task-3__result');
  // #endregion Init

  // #region buttonEvent
  btn.addEventListener('click', () => {
    result.value = reverseNumber(number.value);
  });

  // AUTOTEST:
  btn.click();
  // #endregion buttonEvent
};

export default (open) => documentReady(taskRun, open);

/*
// 4.Написать функцию, которая считает сумму цифр числа.
//   Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

//

// 5.Написать функцию, которая принимает число и выводит соответствующее количество
//   вложенных пар круглых скобок. Например: число 4 – (((()))).
*/
