import React, { Component } from 'react'

import './home.scss'
import { Container } from 'react-bootstrap'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'

class Home extends Component {
    componentDidMount = async () => {}

    render() {
        console.log(this.props)
        console.log(this.props.history)
        return (
            <>
                <Container fluid className='home'>
                    <NavBar {...this.props} />
                    <h1>Home Pages</h1>
                    <Footer />
                </Container>
            </>
        )
    }
}

export default Home
