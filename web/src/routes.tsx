import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphansMap from './pages/OrphansMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" exact component={OrphansMap}/>
                <Route path="/orphanages/create" exact component={CreateOrphanage}/>
                <Route path="/orphanages/:id" exact component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes