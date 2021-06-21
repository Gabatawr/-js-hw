import documentReady from '../../helpers/documentReady';

// Description:
// Реализовать на html странице два или больше паралельно заполняющихся прогресс бара.
// Использовать механизм очереди макрозадач, функцию setTimeout().

const msMin = 10;
const msMax = 50;

const start = (rider) => new Promise((resolve) => setInterval(() => {
  rider.value = +rider.value + 1;
  if (rider.value === rider.max) resolve();
}, Math.random() * (msMax - msMin) + msMin));

const taskRun = (taskOpen) => {
  // #region Init
  const task = document.querySelector('.task-8-rpb');
  if (task === null) return;
  task.open = taskOpen;

  const content = task.querySelector('.task__content');
  const number = task.querySelector('.task-8-rpb__textbox');
  number.value = Math.floor(Math.random() * 10 + 2);

  const btn = task.querySelector('.task-8-rpb__btn');
  const tmp = task.querySelector('.task-8-rpb__racer--tmp');

  const riders = [];
  // #endregion Init

  // #region buttonEvent
  btn.addEventListener('click', () => {
    content.querySelectorAll('progress').forEach((node) => {
      if (node.parentNode === content) {
        content.removeChild(node);
      }
    });

    for (let i = 0; i < +number.value; i += 1) {
      const racer = tmp.querySelector('.task-8-rpb__racer').cloneNode(true);
      riders.push(racer);
      tmp.before(racer);
    }

    riders.forEach((r) => start(r));
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

export default () => documentReady(taskRun, true);
