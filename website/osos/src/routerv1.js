import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Work = () => (
  <div>
    <h2>Work</h2>
  </div>
)

const Opinions = () => (
  <div>
    <h2>Opinions</h2>
  </div>
)

const Trust = () => (
  <div>
    <h2>Trust</h2>
  </div>
)

class Apptest extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            /* Link components are used for linking to other views */
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Work">Work</Link></li>
            <li><Link to="/Opinions">Opinions</Link></li>
            <li><Link to="/Trust">Trust</Link></li>
          </ul>
        </nav>

        /* Route components are rendered if the path prop matches the current URL */
        <Route exact={true} path="/" component={Home}/>
        /* use exact prop if you want a route to be rendered only if the paths are exactly the same */
        <Route path="/About" component={About}/>
        <Route path="/Work" component={Work}/>
        <Route path="/Opinions" component={Opinions}/>
        <Route path="/Trust" component={Trust}/>

      </div>
    );
  }
}

export default Apptest;
