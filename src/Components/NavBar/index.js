import React, { Component } from 'react'

import TokenHandler from '../../Utils/TokenHandler'

import './navbar.scss'
import { Nav, Navbar } from 'react-bootstrap'
const tokenHandler = new TokenHandler()

const URL_LOGOUT = 'logout'

class NavBar extends Component {
    _isLightNavbar = () => this.props.isLight

    _isActive = (url) => this.props.url === url

    _getLink = (name, url) => <Nav.Link href={url}>{name}</Nav.Link>

    _logout = () => {
        tokenHandler.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <Navbar
                sticky='top'
                collapseOnSelect
                expand='lg'
                bg='transparent'
                variant='dark'
            >
                <Navbar.Brand href='#home'>TpConnects</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'></Nav>
                    <Nav>
                        {!tokenHandler.isLoggedIn() &&
                            this._getLink('Login', 'login')}
                        {!tokenHandler.isLoggedIn() &&
                            this._getLink('Register', 'register')}
                        {tokenHandler.isLoggedIn() && (
                            <>
                                {this._getLink('Dashboard', 'dashboard')}
                                {this._getLink('Logout', URL_LOGOUT)}
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
