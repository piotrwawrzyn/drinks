import { useHistory } from 'react-router';
import { useSwipeable } from 'react-swipeable';
import './HomeCard.css';
import { swipeToAnotherDrink } from './utils';

const HomeCard = ({ drinks }) => {
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedUp: _ => {
      swipeToAnotherDrink(drinks[0].name, history);
    },

    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false
  });

  return (
    <div className="home__card" {...handlers}>
      <div className="home__card--bg-image"></div>
      <div className="home__card--welcome-text">
        <div>Lemme</div>
        <div>serve you</div>
        <div>a drink</div>
      </div>
      <div className="home__card--next-drink animated bounce">
        <div>👇</div>
        <div className="home__card--next-drink--text">
          <p>
            Simply <strong>swipe</strong>
          </p>
          <p>& start the journey</p>
        </div>
        <div>👇</div>
      </div>
    </div>
  );
};

export default HomeCard;
