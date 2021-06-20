import documentReady from '../../../helpers/documentReady';

// Description:
// 5.Написать функцию, которая принимает число и выводит соответствующее количество
//   вложенных пар круглых скобок. Например: число 4 – (((()))).

const brackets = (num, acc = []) => {
  if (num <= 0) return acc;
  acc.unshift('(');
  acc.push(')');
  return num === 1 ? acc : brackets(num - 1, acc);
};

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-5');
  if (task === null) return;
  task.open = taskOpen;

  const number = task.querySelector('.task-5__textbox');
  number.value = Math.floor(Math.random() * 10 + 1);
  const btn = task.querySelector('.task-5__btn');
  const result = task.querySelector('.task-5__result');
  // #endregion Init

  // #region buttonEvent
  btn.addEventListener('click', () => {
    result.value = brackets(+number.value).join('');
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
