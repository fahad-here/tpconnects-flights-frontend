import React, { Component } from 'react'

import './home.scss'
import { Container } from 'react-bootstrap'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import Cover from './Components/Cover'
import GetStarted from './Components/GetStarted'

class Home extends Component {
    componentDidMount = async () => {}

    render() {
        console.log(this.props)
        console.log(this.props.history)
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
