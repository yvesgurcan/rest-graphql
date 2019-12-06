import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import REST from './views/REST';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/rest" component={REST} />
            <Route path="/" component={Home} />
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
