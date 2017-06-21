import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { Provider } from 'react-redux';
import storeFactory from 'store';
import './index.css';

const store = storeFactory();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
