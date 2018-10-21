import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './pages/About';
import Homepage from './pages/Homepage';
import Work from './pages/Work';
// import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </div>
  </Router>,
  app
);
// registerServiceWorker();
