import React, { Component } from 'react'

import './home.scss'
import { Container } from 'react-bootstrap'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import Cover from './Components/Cover'
import GetStarted from './Components/GetStarted'

import TokenHandler from '../../Utils/TokenHandler'

const tokenHandler = new TokenHandler()

class Home extends Component {
    componentDidMount = async () => {
        if (tokenHandler.isLoggedIn()) await this.props.getUser()
        else tokenHandler.logout()
    }
    render() {
        return (
            <Container fluid className='home'>
                <NavBar {...this.props} />
                <Cover />
                <GetStarted />
                <Footer />
            </Container>
        )
    }
}

export default Home
