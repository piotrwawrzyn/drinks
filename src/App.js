import './App.css';
import DrinkCard from './DrinkCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router';
import { getUrlFriendlyString } from './utils';
import { isMobile } from 'react-device-detect';
import ComeBackOnMobile from './ComeBackOnMobile';
import drinkData from './data';
import { withOrientationChange } from 'react-device-detect';
import HomeCard from './HomeCard';

const App = ({ location, isLandscape }) => {
  if (isLandscape) return <div>Landscape mode is not currently supported</div>;
  if (!isMobile) return <ComeBackOnMobile />;

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide-up" timeout={1500}>
        <Switch location={location}>
          <Route
            key="home"
            path={`/`}
            exact
            render={props => <HomeCard {...props} drinks={drinkData} />}
          />
          {drinkData.map((drink, index) => (
            <Route
              exact
              key={drink.name}
              path={`/${getUrlFriendlyString(drink.name)}`}
              render={props => (
                <DrinkCard
                  {...props}
                  drink={drink}
                  neighbourDrinksNames={{
                    previous: drinkData[index - 1]
                      ? drinkData[index - 1].name
                      : drinkData[drinkData.length - 1].name,
                    next: drinkData[index + 1]
                      ? drinkData[index + 1].name
                      : drinkData[0].name
                  }}
                ></DrinkCard>
              )}
            />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(withOrientationChange(App));
