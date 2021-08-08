import React from 'react';
import { stack as StackMenu } from 'react-burger-menu';
import MyLink from './MyLink';
import './styles/Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  showSettings(event) {
    event.preventDefault();
  }

  onMenuItemClicked = () => {
    document.querySelector('#react-burger-cross-btn').click();
  };

  render() {
    return (
      <StackMenu className="menu">
        <div>
          <MyLink
            onClick={this.onMenuItemClicked}
            to={{
              pathname: '/',
              state: { previousLocation: this.props.location }
            }}
            location={this.props.location}
          >
            Back to start
          </MyLink>
        </div>
        <div>
          <MyLink
            onClick={this.onMenuItemClicked}
            to={{
              pathname: '/drinks-list',
              state: { previousLocation: this.props.location }
            }}
            location={this.props.location}
          >
            Drinks list
          </MyLink>
        </div>
        <div>
          <MyLink
            onClick={this.onMenuItemClicked}
            to="/"
            location={this.props.location}
          >
            Random drink
          </MyLink>
        </div>
      </StackMenu>
    );
  }
}

export default Menu;
