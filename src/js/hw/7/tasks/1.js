import documentReady from '../../../helpers/documentReady';

// Description:
// 1.Написать функцию, которая вычисляет факториал заданного числа.

const factorialCalc = (num) => (num <= 1 ? 1 : num * factorialCalc(num - 1));

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-1');
  if (task === null) return;
  task.open = taskOpen;

  const number = task.querySelector('.task-1__textbox');
  number.value = Math.floor(Math.random() * 10 + 1);

  const btn = task.querySelector('.task-1__btn');
  const result = task.querySelector('.task-1__result');
  // #endregion Init

  // #region buttonEvent
  btn.addEventListener('click', () => {
    result.value = factorialCalc(Number.parseInt(number.value, 10));
  });

  // AUTOTEST:
  btn.click();

  // #endregion buttonEvent
};

export default (open) => documentReady(taskRun, open);
