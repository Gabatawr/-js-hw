import documentReady from './helpers/documentReady';
import hw7 from './hw/7/index';
import hw8 from './hw/8/index';

const init = { hw7, hw8 };

// #region linkActive
documentReady(() => {
  document
    .querySelector('.menu__list')
    .querySelectorAll('.menu__link')
    .forEach((a) => {
      if (window.location.href === a.href) {
        a.classList.add('menu__link--active');

        if (a.href.includes('/hw')) {
          init[a.href.substring(a.href.lastIndexOf('/') + 1).replace('.html', '')]();
        }
      }
    });
});
// #endregion linkActive
