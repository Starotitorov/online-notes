import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App, Whoops404 } from './components';
import Home from './components/ui/Home';
import SignInForm from './components/containers/SignInForm';
import SignUpForm from './components/containers/SignUpForm';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/signin" component={SignInForm}/>
            <Route path="/signup" component={SignUpForm}/>
        </Route>
        <Route path="*" component={Whoops404}/>
    </Router>
);

export default routes;
