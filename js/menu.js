(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  const buttons = document.querySelector('.portfolio__items');

  buttons.addEventListener('click', handleOnClick);

  function handleOnClick(e) {
    e.preventDefault();
    const targetElement = e.target;

    if (targetElement.nodeName !== 'BUTTON') {
      return;
    }

    if (
      targetElement.classList.contains('portfolio__btn') &&
      !targetElement.classList.contains('active')
    ) {
      const activeElement = document.querySelector('.portfolio__btn.active');
      const cards = document.querySelectorAll('.card__item');
      const elementType = targetElement.dataset.type;

      activeElement.classList.remove('active');
      targetElement.classList.add('active');

      cards.forEach((elem) =>
        !elementType || elem.dataset.type === elementType
          ? (elem.hidden = false)
          : (elem.hidden = true)
      );
    }
  }
})();
