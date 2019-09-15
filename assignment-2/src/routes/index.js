import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import NotFoundPage from '../components/NotFoundPage';

const Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="" component={NotFoundPage} />
    </Switch> 
    </BrowserRouter>
)

export default Routes