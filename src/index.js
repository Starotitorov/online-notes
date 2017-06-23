import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import routesFactory from './routes';
import { Provider } from 'react-redux';
import storeFactory from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import { addError } from './actions';
import './index.css';

const store = storeFactory();
const history = syncHistoryWithStore(hashHistory, store);
const routes = routesFactory(history);

const handleError = (error = 'Unknown error.') => store.dispatch(addError(error));
window.addEventListener('error', handleError);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
