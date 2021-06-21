import documentReady from '../../../helpers/documentReady';

// Description:
// 4.Написать функцию, которая считает сумму цифр числа.
//   Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

const sumDigit = (num) => {
  if (num < 10) return num;
  const n = num / 10;
  const d = Math.round((n % 1) * 10);
  return d + sumDigit(Math.trunc(n));
};

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-7-4');
  if (task === null) return;
  task.open = taskOpen;

  const number = task.querySelector('.task-7-4__textbox');
  number.value = Math.floor(Math.random() * 1000000 + 10);
  const btn = task.querySelector('.task-7-4__btn');
  const result = task.querySelector('.task-7-4__result');
  // #endregion Init

  // #region buttonEvent
  btn.addEventListener('click', () => {
    result.value = sumDigit(+(number.value.replace('-', '')));
  });
  // #endregion buttonEvent

  // #region inputEvent
  number.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) btn.click();
  });
  // #endregion inputEvent

  // AUTOTEST:
  btn.click();
};

export default (open) => documentReady(taskRun, open);

/*
// 5.Написать функцию, которая принимает число и выводит соответствующее количество
//   вложенных пар круглых скобок. Например: число 4 – (((()))).
*/
