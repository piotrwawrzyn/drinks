import './styles/DrinkCard.css';
import { useSwipeable } from 'react-swipeable';
import { useHistory } from 'react-router-dom';
import {
  adjustFontSizeToContainer,
  changeMenuButtonColor,
  swipeToAnotherDrink
} from './utils';
import { useEffect } from 'react';

const getRateStyleForDigit = digit => {
  const digitLength = digit.toString().length;

  return digitLength > 1 ? { width: 'auto' } : {};
};

const DrinkCard = ({ drink, neighbourDrinksIds }) => {
  const {
    name,
    image,
    backgroundImage,
    ingredients,
    rating,
    strength,
    funfact
  } = drink;
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedUp: _ => {
      swipeToAnotherDrink(neighbourDrinksIds.next, history);
    },

    onSwipedDown: _ => {
      // TODO: Support going backwards as well
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false
  });

  useEffect(() => {
    (() => {
      const card = document.querySelector('.drink__card');
      const title = document.querySelector('.drink__card--top-section h2');

      adjustFontSizeToContainer(title, card, 0.9);
      changeMenuButtonColor('white');
    })();
  });

  return (
    <div className="drink__card" {...handlers}>
      <div className="drink__card--top-section-wrapper">
        <div className="drink__card--top-section-wrapper--background-placeholder"></div>
        <div
          className="drink__card--top-section-wrapper--background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img src={`${backgroundImage}`} alt="background" />
        </div>
        <div className="drink__card--top-section">
          <div className="drink__card--image--container">
            <img className="drink__card--image" alt={name} src={image} />
          </div>

          <h2>{name}</h2>
        </div>
      </div>
      <div className="drink__card--ingredients-section">
        <div className="drink__card--ingredients-section--alcohols">
          <h3>Alcohols</h3>
          <ul>
            {ingredients.alcoholic.map(alcohol => (
              <li key={alcohol}>{alcohol}</li>
            ))}
          </ul>
        </div>
        <div className="drink__card--ingredients-section--other">
          <h3>Other ingredients</h3>
          <ul>
            {ingredients.other.map(otherIngredient => (
              <li key={otherIngredient}>{otherIngredient}</li>
            ))}
          </ul>
        </div>
      </div>

      {funfact && (
        <div className="drink__card--funfact-section">
          <div className="separator"></div>
          <div className="drink__card--funfact-section--funfact">{funfact}</div>
          <div className="separator"></div>
        </div>
      )}

      <div className="drink__card--ratings-section">
        <div>
          Strength{' '}
          <div
            style={getRateStyleForDigit(strength)}
            className="drink__card--ratings-section--rate"
          >
            {strength}
          </div>
          <div className="drink__card--ratings-section--max">/10</div>
        </div>
        <div>
          My Rating{' '}
          <div
            style={getRateStyleForDigit(rating)}
            className="drink__card--ratings-section--rate"
          >
            {rating}
          </div>
          <div className="drink__card--ratings-section--max">/10</div>
        </div>
      </div>

      <div className="drink__card--next-drink animated bounce">
        <p>👇 Swipe for the next drink 👇</p>
      </div>
    </div>
  );
};

export default DrinkCard;
