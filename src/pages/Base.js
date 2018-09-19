import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './Home/Home'

export default class Base extends Component {
    render() {
        return(
            <div>
                <Route 
                    path="/home" 
                    component={ Home } />
            </div>
        )
    }
}