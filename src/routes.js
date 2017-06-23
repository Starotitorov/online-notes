import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { App, Whoops404 } from './components';
import Home from './components/ui/Home';
import SignInForm from './components/containers/SignInForm/index';
import SignUpForm from './components/containers/SignUpForm/index';

export default (history) =>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/signin" component={SignInForm}/>
            <Route path="/signup" component={SignUpForm}/>
        </Route>
        <Route path="*" component={Whoops404}/>
    </Router>
