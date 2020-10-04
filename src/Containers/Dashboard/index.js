import React, { Component, Fragment } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import LoggedInRoute from '../../Routes/LoggedInRoute'
import Flights from './Flights/FlightsContainer'
import NewFlight from './NewFlight/NewFlightContainer'

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
                        <LoggedInRoute
                            exact
                            path='/dashboard/flights/new'
                            component={NewFlight}
                        />
                        <LoggedInRoute
                            exact
                            path='*'
                            render={() => <Redirect to='/dashboard' />}
                        />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
