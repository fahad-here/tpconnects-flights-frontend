import React, { Component } from 'react'

import TokenHandler from '../../Utils/TokenHandler'

import './navbar.scss'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
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
            <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
                <Navbar.Brand href='#home'>TpConnects</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#features'>Features</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                        <NavDropdown
                            title='Dropdown'
                            id='collasible-nav-dropdown'
                        >
                            <NavDropdown.Item href='#action/3.1'>
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {!tokenHandler.isLoggedIn() &&
                            this._getLink('Login', 'login')}
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
