import React, { Component } from 'react'

import './get-started.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default class GetStarted extends Component {
    render() {
        return (
            <Container fluid className='get-started'>
                <Row>
                    <Col xs={12}>
                        <h1>Get started today</h1>
                        <h2>Register now</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <a href='/register'>
                            <Button>Register</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
