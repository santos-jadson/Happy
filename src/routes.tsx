import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphansMap from './pages/OrphansMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" exact component={OrphansMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes