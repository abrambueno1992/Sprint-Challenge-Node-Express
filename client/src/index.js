import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MainComponent from './components/MainComponent'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router >
        < App />
      {/* <Route to="/" component={App} /> */}

    </Router>,
    document.getElementById('root'));
registerServiceWorker();
