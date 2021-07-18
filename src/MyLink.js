import { Component } from 'react';
import { Link } from 'react-router-dom';

class MyLink extends Component {
  render() {
    let route;
    if (typeof this.props.to === 'string') {
      route = this.props.to;
    } else {
      route = this.props.to.pathname;
    }

    if (this.props.location.pathname === route) {
      return <span onClick={this.props.onClick}>{this.props.children}</span>;
    }

    return (
      <Link onClick={this.props.onClick} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

export default MyLink;
