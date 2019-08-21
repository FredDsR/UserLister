import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './pages/Start';
import Users from './pages/Users';
import New from './pages/New';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Start}/>
            <Route path="/user" exact component={Users} />
            <Route path="/user/:id" exact component={New} />
        </Switch>
    );
}

export default Routes;