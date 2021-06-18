import documentReady from '../../../helpers/documentReady';

// Description:
// 1.Написать функцию, которая вычисляет факториал заданного числа.

const factorialCalc = (num) => (num <= 1 ? 1 : num * factorialCalc(num - 1));

const taskRun = () => {
  const taskElement = document.querySelector('.task-1');
  if (taskElement === null) return;

  const textboxElement = taskElement.querySelector('.task-1__textbox');
  const btnElement = taskElement.querySelector('.task-1__btn');
  const resultElement = taskElement.querySelector('.task-1__result');

  btnElement.addEventListener('click', () => {
    resultElement.value = factorialCalc(Number.parseInt(textboxElement.value, 10));
  });

  // TEST:
  btnElement.click();
};

export default () => documentReady(taskRun);
