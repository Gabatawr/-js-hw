import documentReady from './helpers/documentReady';

documentReady(() => {
  document
    .querySelector('.menu__list')
    .querySelectorAll('.menu__link')
    .forEach((a) => {
      if (window.location.href.includes(a.href)) {
        a.classList.add('menu__link--active');
      }
    });
});
