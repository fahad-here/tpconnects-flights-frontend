import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function LoggedInRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token') !== null) {
                    const view =
                        props.location.pathname === '/'
                            ? '/'
                            : props.location.pathname
                    return <Component view={view} {...props} />
                } else {
                    // Redirect to login screen
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            }}
        />
    )
}
