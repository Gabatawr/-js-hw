import documentReady from '../../../helpers/documentReady';

// Description:
// 2.Написать функцию, которая выводит все числа из заданного пользователем диапазона
//   в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

const rangeNumbers = (a, b, acc = []) => {
  if (a === b) {
    acc.push(b);
    return acc;
  }
  acc.push(a);
  return rangeNumbers(a + 1, b, acc);
};

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-7-2');
  if (task === null) return;
  task.open = taskOpen;

  const rand = Math.floor(Math.random() * 100 + 1);

  const rangeMin = task.querySelector('.task-7-2__range-min');
  rangeMin.value = rand / 2;
  rangeMin.max = rand;

  const rangeMax = task.querySelector('.task-7-2__range-max');
  rangeMax.value = rand;
  rangeMax.max = rand * 2;

  const labelMin = task.querySelector('.task-7-2__label-min');
  const labelMax = task.querySelector('.task-7-2__label-max');
  const result = task.querySelector('.task-7-2__result');
  // #endregion Init

  // #region Closures
  const ascHandler = () => rangeNumbers(+rangeMin.value, +rangeMax.value);
  const descHandler = () => ascHandler().reverse();
  // #endregion Closures

  // #region inputEvent
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
  // #endregion inputEvent

  // #region buttonEvent
  new Map([
    ['asc', {
      btn: task.querySelector('.task-7-2__btn-asc'),
      handler() { result.textContent = ascHandler().join(', '); },
      testTimeout: 500,
    }],
    ['dest', {
      btn: task.querySelector('.task-7-2__btn-desc'),
      handler() { result.textContent = descHandler().join(', '); },
      testTimeout: 2500,
    }],
  ]).forEach((v) => {
    v.btn.addEventListener('click', v.handler);

    // AUTOTEST:
    task.addEventListener('click', () => {
      setTimeout(() => v.btn.click(), v.testTimeout);
    }, { once: true });
  });
  // #endregion buttonEvent
};

export default (open) => documentReady(taskRun, open);
