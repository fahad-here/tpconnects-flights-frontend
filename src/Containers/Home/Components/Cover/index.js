import React, { Component } from 'react'

import Plane from '../../../../Assets/img/plane.svg'

import './cover.scss'
import { Col, Container, Row } from 'react-bootstrap'

export default class Cover extends Component {
    render() {
        return (
            <Container className='cover' fluid>
                <Row className='justify-content-md-center'>
                    <Col lg={4} md={6} sm={12}>
                        <img src={Plane} alt={'Plane image'} />
                    </Col>
                    <Col lg={4} md={6} sm={12} className='slogan'>
                        <h1>Tp Connects</h1>
                        <h2>Digitally Empowering Airlines</h2>
                        <p>
                            Our Airline retailing product is the
                            platform-of-choice for the global airline brands
                            leading the transformation in air retailing.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
