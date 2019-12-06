import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Links from './views/Links';

import Acronym from './views/REST/Acronym';
import Definition from './views/REST/Definition';
import Components from './views/REST/Components';
import Methods from './views/REST/Methods';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/rest/acronym" component={Acronym} />
            <Route path="/rest/definition" component={Definition} />
            <Route path="/rest/components" component={Components} />
            <Route path="/rest/methods" component={Methods} />

            <Route path="/links" component={Links} />

            <Route path="/" exact component={Home} />
            <Route path="/" component={NotFound} />
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
