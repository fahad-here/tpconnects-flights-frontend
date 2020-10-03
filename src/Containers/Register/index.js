import React, { Component } from 'react'

import NavBar from '../../Components/NavBar'
import RegisterCard from './Components/RegisterCard'
import Cover from '../Home/Components/Cover'
import Footer from '../../Components/Footer'

import './register.scss'

export default class Register extends Component {
    render() {
        return (
            <div className='register'>
                <NavBar url='register' />
                <Cover />
                <RegisterCard {...this.props} />
                <Footer url='register' />
            </div>
        )
    }
}
