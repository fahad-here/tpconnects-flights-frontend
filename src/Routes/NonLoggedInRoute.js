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
                    // Redirect to dashboard
                    return (
                        <Redirect
                            to={{
                                pathname: '/dashboard',
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            }}
        />
    )
}
