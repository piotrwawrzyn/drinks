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

export const decreaseElementsSizeIfNoSpaceToFitOnCard = () => {
  // const drinkCard = document.querySelector('.drink__card');
  // const drinkCardHeight = drinkCard.offsetHeight;
  // const bottomOffset = 0.1 * drinkCardHeight;
  // const drinkCardRect = drinkCard.getBoundingClientRect();
  // let removeCardHeightFromPosition;
  // if (drinkCardRect.top > 0) removeCardHeightFromPosition = true;
  // const drinkCardRatingSection = document.querySelector(
  //   '.drink__card--ratings-section'
  // );
  // console.log(document.querySelectorAll('.drink__card--ratings-section'));
  // const drinkCardRatingSectionRect =
  //   drinkCardRatingSection.getBoundingClientRect();
  // let drinkCardRatingSectionPosition = removeCardHeightFromPosition
  //   ? drinkCardRatingSectionRect.y -
  //     drinkCardHeight -
  //     drinkCardRatingSectionRect.height
  //   : drinkCardRatingSectionRect.y - drinkCardRatingSectionRect.height;
  // console.log(drinkCardRatingSectionPosition);
  // console.log(drinkCardHeight, bottomOffset);
  // while (drinkCardRatingSectionPosition + bottomOffset > drinkCardHeight) {
  //   console.log(drinkCardRatingSectionPosition);
  //   document.querySelector('.drink__card--image').style.width =
  //     document.querySelector('.drink__card--image').offsetWidth - 1;
  //   drinkCardRatingSectionPosition = removeCardHeightFromPosition
  //     ? drinkCardRatingSectionRect.y -
  //       drinkCardHeight -
  //       drinkCardRatingSectionRect.height
  //     : drinkCardRatingSectionRect.y - drinkCardRatingSectionRect.height;
  // }
};
