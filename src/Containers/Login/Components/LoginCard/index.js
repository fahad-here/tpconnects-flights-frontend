import React, { Component } from 'react'

import './login-card.scss'
import FormValidationSchemas from '../../../../Utils/FormValidationSchemas'
import { Formik } from 'formik'
import LoginForm from '../../../../Components/Forms/Login'
import { Card, Col, Container, Row } from 'react-bootstrap'

const { LoginYup } = FormValidationSchemas

export default class LoginCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false
        }
    }

    _handleShowPassword = () =>
        this.setState({
            showPassword: !this.state.showPassword
        })

    _didLogin = (loginType, prevProps) =>
        prevProps.app.status[loginType].loading &&
        !this.props.app.status[loginType].loading &&
        !this.props.app.status[loginType].error

    _didLoadSuccessfully = (prevProps) => this._didLogin('login', prevProps)

    componentDidUpdate = (prevProps) => {
        if (this._didLoadSuccessfully(prevProps))
            this.props.history.push('/dashboard')
    }

    _submitAddAccount = async (values, actions) =>
        await this.props.login(values.email, values.password)

    _closeBaseDialog = () => this.props.resetDialog('base')

    render() {
        return (
            <Container maxWidth='md'>
                <div className='login-card'>
                    <Row>
                        <Col xs={12}>
                            <h1>Login</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col xs={12}>
                            <Card className='card-outer'>
                                <Card.Body className='card-inner'>
                                    <Formik
                                        validationSchema={LoginYup}
                                        onSubmit={console.log}
                                        initialValues={{
                                            email: 'fmohajir@gmail.com',
                                            password: 'test1234'
                                        }}
                                        render={(props) => (
                                            <LoginForm
                                                {...props}
                                                handleShowPassword={
                                                    this._handleShowPassword
                                                }
                                                showPassword={
                                                    this.state.showPassword
                                                }
                                            />
                                        )}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
