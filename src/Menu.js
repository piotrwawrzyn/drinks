import React from 'react';
import { stack as StackMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <StackMenu className="menu">
        <div>
          <Link to="/">Back to start</Link>
        </div>
        <div>
          <Link to="/drinks-list">Drinks list</Link>
        </div>
        <div>
          <Link to="/">Random drink</Link>
        </div>
      </StackMenu>
    );
  }
}

export default Menu;
