import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

import Home from './Home/Home'

export default class Base extends Component {
    render() {
        return(
            <div>
                <Route 
                    path="/home" 
                    component={ Home } />
                <Redirect to="/home" />
            </div>
        )
    }
}