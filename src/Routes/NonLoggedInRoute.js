import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function NonLoggedInRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token') === null) {
                    const view =
                        props.location.pathname === '/'
                            ? '/login'
                            : props.location.pathname
                    return <Component view={view} {...props} />
                } else {
                    // Redirect to landing
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            }}
        />
    )
}
