import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import DataTracker from '../components/DataTracker'
import NotFoundPage from '../components/NotFoundPage';

const Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={DataTracker} />
        <Route path="" component={NotFoundPage} />
    </Switch> 
    </BrowserRouter>
)

export default Routes