export const getUrlFriendlyString = string => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

let lastSwipeTime = null;

export const swipeToAnotherDrink = (name, history) => {
  if (lastSwipeTime === null || new Date().getTime() - lastSwipeTime > 1500) {
    history.push('/' + getUrlFriendlyString(name));
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
