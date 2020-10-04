import React, { Component } from 'react'

import TokenHandler from '../../Utils/TokenHandler'

import './navbar.scss'
import { Nav, Navbar } from 'react-bootstrap'
const tokenHandler = new TokenHandler()

class NavBar extends Component {
    _getLink = (name, url) => <Nav.Link href={url}>{name}</Nav.Link>

    render() {
        return (
            <Navbar
                sticky='top'
                collapseOnSelect
                expand='lg'
                bg='transparent'
                variant='dark'
            >
                <Navbar.Brand href='/'>TpConnects</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto' />
                    <Nav activeKey={this.props.url}>
                        {!tokenHandler.isLoggedIn() &&
                            this._getLink('Login', 'login')}
                        {!tokenHandler.isLoggedIn() &&
                            this._getLink('Register', 'register')}
                        {tokenHandler.isLoggedIn() && (
                            <>
                                {this._getLink('Dashboard', 'dashboard')}
                                {this._getLink('Logout', 'logout')}
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
