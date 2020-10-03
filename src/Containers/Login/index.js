import React, { Component } from 'react'

import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import Cover from '../Home/Components/Cover'

import './login.scss'
import LoginCard from './Components/LoginCard'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <NavBar url='login' />
                <Cover />
                <LoginCard />
                <Footer url='login' />
            </div>
        )
    }
}
