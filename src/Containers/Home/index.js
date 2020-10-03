import React, { Component } from 'react'

import './home.scss'
import { Container } from 'react-bootstrap'
import NavBar from '../../Components/NavBar'

class Home extends Component {
    componentDidMount = async () => {}

    render() {
        return (
            <Container fluid className='home'>
                <NavBar />
                <h1>Home Page</h1>
            </Container>
        )
    }
}

export default Home
