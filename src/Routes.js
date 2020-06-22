import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="*" component={PageNotFound} />
        </ Switch>
    </BrowserRouter>
);

export default Routes;