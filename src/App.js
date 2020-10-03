import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Containers/Home/HomeContainer'
import Login from './Containers/Login/LoginContainer'

import NonLoggedInRoute from './Routes/NonLoggedInRoute'
import LoggedInRoute from './Routes/LoggedInRoute'

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <NonLoggedInRoute exact path='/' component={Home} />
                    <NonLoggedInRoute exact path='/login' component={Login} />
                    {/*<LoggedInRoute exact component={Home} />*/}
                    <Route exact path='*' render={() => <Redirect to='/' />} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
