import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Containers/Home'

import NonLoggedInRoute from './Routes/NonLoggedInRoute'
import LoggedInRoute from './Routes/LoggedInRoute'

function App() {
    WebSocket.initialize()
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <NonLoggedInRoute exact path='/login' component={Home} />
                    <LoggedInRoute exact component={Home} />
                    <Route exact path='*' render={() => <Redirect to='/' />} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
