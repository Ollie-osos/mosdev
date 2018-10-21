import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import '../assets/styles/index.css';

import Title from './Header/Title';

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title={this.props.title} />
          <input
            value={this.props.title}
            onChange={this.handleChange.bind(this)}
          />
        </header>
        <div>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="work">Work</Link>
        </div>
      </div>
    );
  }
}
