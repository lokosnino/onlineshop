import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "bootstratp/dist/css/bootstrap.css";
import "@fontawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();