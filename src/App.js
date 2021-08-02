import './styles/App.css';
import DrinkCard from './DrinkCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router';
import { isMobile } from 'react-device-detect';
import ComeBackOnMobile from './ComeBackOnMobile';
import drinkData from './data';
import { withOrientationChange } from 'react-device-detect';
import HomeCard from './HomeCard';
import Menu from './Menu';
import List from './List';

const routesWithoutAnimation = ['/drinks-list'];

const App = ({ location, isLandscape }) => {
  if (isLandscape) return <div>Landscape mode is not currently supported</div>;
  if (!isMobile) return <ComeBackOnMobile />;

  /* This is a nasty fix to exclude some routes from the animation */
  let CSSTransitionKey;
  let inProp = true;
  if (location.state && routesWithoutAnimation.includes(location.pathname)) {
    CSSTransitionKey = location.state.previousLocation.key;
    inProp = false;
  } else {
    CSSTransitionKey = location.key;
  }

  return (
    <div id="container">
      <Menu
        location={location}
        pageWrapId={'container'}
        outerContainerId={'container'}
      />
      <TransitionGroup exit={inProp} enter={inProp} appear={inProp}>
        <CSSTransition
          key={CSSTransitionKey}
          classNames={'slide-up'}
          timeout={1500}
          in={inProp}
        >
          <Switch location={location}>
            <Route
              key="drinks-list"
              path="/drinks-list"
              render={props => (
                <List
                  {...props}
                  elements={drinkData}
                  title="DRINKS I CAN MIX"
                />
              )}
            />
            <Route
              exact
              key="home"
              path="/"
              render={props => <HomeCard {...props} drinks={drinkData} />}
            />
            {drinkData.map((drink, index) => (
              <Route
                key={drink.name}
                path={`/${drink.id}`}
                render={props => (
                  <DrinkCard
                    {...props}
                    drink={drink}
                    neighbourDrinksIds={{
                      previous: drinkData[index - 1]
                        ? drinkData[index - 1].id
                        : drinkData[drinkData.length - 1].id,
                      next: drinkData[index + 1]
                        ? drinkData[index + 1].id
                        : drinkData[0].id
                    }}
                  ></DrinkCard>
                )}
              />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(withOrientationChange(App));
