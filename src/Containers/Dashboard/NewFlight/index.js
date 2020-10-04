import React, { Component } from 'react'

import NavBar from '../../../Components/NavBar'
import Cover from '../../Home/Components/Cover'
import Footer from '../../../Components/Footer'

import './new-flight.scss'
import NewFlightCard from './NewFlightCard'

export default class NewFlight extends Component {
    render() {
        return (
            <div className='new-flight'>
                <NavBar url='flights/new' />
                <Cover />
                <NewFlightCard {...this.props} />
                <Footer url='flights/new' />
            </div>
        )
    }
}
