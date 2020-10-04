import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Containers/Home/HomeContainer'
import Login from './Containers/Login/LoginContainer'

import NonLoggedInRoute from './Routes/NonLoggedInRoute'
import LoggedInRoute from './Routes/LoggedInRoute'
import Register from './Containers/Register/RegisterContainer'
import Logout from './Utils/FormValidationSchemas/Logout'

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <NonLoggedInRoute exact path='/' component={Home} />
                    <NonLoggedInRoute exact path='/login' component={Login} />
                    <NonLoggedInRoute
                        exact
                        path='/register'
                        component={Register}
                    />
                    <LoggedInRoute path='/dashboard' exact component={Home} />
                    <LoggedInRoute path='/logout' exact component={Logout} />
                    <Route exact path='*' render={() => <Redirect to='/' />} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
