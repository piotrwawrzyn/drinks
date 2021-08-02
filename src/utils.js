let lastSwipeTime = null;

export const swipeToAnotherDrink = (id, history) => {
  if (lastSwipeTime === null || new Date().getTime() - lastSwipeTime > 1500) {
    history.push('/' + id);
    lastSwipeTime = new Date().getTime();
  }
};

export const adjustFontSizeToContainer = (
  element,
  container,
  maxPartOfContainer
) => {
  const containerWidth = container.offsetWidth;

  let elementWidth = element.offsetWidth;

  while (elementWidth > containerWidth * maxPartOfContainer) {
    elementWidth = element.offsetWidth;
    const currentFontSize = parseFloat(
      window.getComputedStyle(element, null).getPropertyValue('font-size')
    );

    element.style.fontSize = currentFontSize - 1 + 'px';
  }
};

export const changeMenuButtonColor = color => {
  document.querySelectorAll('.bm-burger-bars ').forEach(bar => {
    bar.style.background = color;
  });
};

export const switchBodyScrolling = enable => {
  if (enable) document.querySelector('body').classList.remove('lock-screen');
  else document.querySelector('body').classList.add('lock-screen');
};
