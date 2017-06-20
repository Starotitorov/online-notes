import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App, Whoops404 } from './components';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="*" component={Whoops404}/>
    </Router>
);

export default routes;
