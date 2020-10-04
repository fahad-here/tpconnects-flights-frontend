import React, { Component } from 'react'

import './login-card.scss'
import FormValidationSchemas from '../../../../Utils/FormValidationSchemas'
import { Formik } from 'formik'
import LoginForm from '../../../../Components/Forms/Login'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'

const { LoginYup } = FormValidationSchemas

export default class LoginCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    _didLogin = (loginType, prevProps) =>
        prevProps.status[loginType].loading &&
        !this.props.status[loginType].loading &&
        !this.props.status[loginType].error

    _didLoadSuccessfully = (prevProps) => this._didLogin('login', prevProps)

    componentDidUpdate = (prevProps) => {
        if (this._didLoadSuccessfully(prevProps))
            this.props.history.push('/dashboard')
    }

    _submitAddAccount = async (values) => {
        await this.props.login(values.email, values.password)
    }

    _closeBaseDialog = () => this.props.resetDialog('base')

    render() {
        return (
            <Container maxWidth='md'>
                <Modal
                    show={this.props.dialogs.base.open}
                    onHide={this._closeBaseDialog}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.dialogs.base.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.dialogs.base.message}</Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant='secondary'
                            onClick={this._closeBaseDialog}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                                        onSubmit={this._submitAddAccount}
                                        initialValues={{
                                            email: 'test@admin.com',
                                            password: 'test1234'
                                        }}
                                        render={(props) => (
                                            <LoginForm {...props} />
                                        )}
                                    />

                                    <Row className='justify-content-md-center'>
                                        <Col>
                                            <p className='go-to-register'>
                                                Don't have an account?{' '}
                                                <a href='/register'>
                                                    Register here
                                                </a>
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
