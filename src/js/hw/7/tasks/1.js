import documentReady from '../../../helpers/documentReady';

// Description:
// 1.Написать функцию, которая вычисляет факториал заданного числа.

const factorialCalc = (num) => {
  if (num <= 1) return 1;
  return num * factorialCalc(num - 1);
};

const eventHandler = () => {
  const taskElement = document.querySelector('.task-1');
  const textboxElement = taskElement.querySelector('.task__textbox');
  const btnElement = taskElement.querySelector('.task__btn');
  const resultElement = taskElement.querySelector('.task__result');

  btnElement.addEventListener('click', () => {
    resultElement.value = factorialCalc(Number.parseInt(textboxElement.value, 10));
  });
};

export default () => documentReady(eventHandler);

/*
// 2.Написать функцию, которая выводит все числа из заданного пользователем диапазона
//   в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

//

// 3.Написать функцию, которая выводит переданное ей число задом наперед.
//   Например: число 1234 вывести как 4321.

//

// 4.Написать функцию, которая считает сумму цифр числа.
//   Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

//

// 5.Написать функцию, которая принимает число и выводит соответствующее количество
//   вложенных пар круглых скобок. Например: число 4 – (((()))).
*/
