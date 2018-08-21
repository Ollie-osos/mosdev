import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apptest from './Apptest';

import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Apptest />
	</BrowserRouter>, 
	document.getElementById('root')
	);
registerServiceWorker();
