import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import './index.css';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
