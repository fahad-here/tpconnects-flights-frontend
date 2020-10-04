import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import LoggedInRoute from '../../Routes/LoggedInRoute'
import Flights from './Flights/FlightsContainer'

export default class Register extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <LoggedInRoute
                            exact
                            path='/dashboard'
                            component={Flights}
                        />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
