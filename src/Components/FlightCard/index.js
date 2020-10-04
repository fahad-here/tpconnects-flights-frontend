import React, { Component } from 'react'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import moment from 'moment'

import './flight.scss'

export default class FlightCard extends Component {
    render() {
        let {
            arrival,
            departure,
            origin,
            destination,
            cost,
            currency,
            _id
        } = this.props.flightDetails
        arrival = moment(arrival)
        departure = moment(departure)
        let hours = arrival.diff(departure, 'hours')
        let mins = moment
            .utc(
                moment(arrival, 'HH:mm:ss').diff(moment(departure, 'HH:mm:ss'))
            )
            .format('mm')
        return (
            <ListGroup.Item className='flight-card-holder'>
                <Row className='flight-card'>
                    <Col md={3} sm={0} xs={0} className='med-departure-holder'>
                        <Row className='justify-content-md-center'>
                            <p>
                                <strong>Departure: </strong>
                                {' ' + moment(departure).format('HH:MM')}
                            </p>
                        </Row>
                        <Row className='justify-content-md-center'>
                            {origin}->{destination}
                        </Row>
                    </Col>
                    <Col
                        md={0}
                        sm={12}
                        xs={12}
                        className='small-departure-holder'
                    >
                        <Row>
                            {origin}->{destination}
                        </Row>
                        <Row>
                            <p>
                                <strong>Departure: </strong>
                                {' ' + moment(departure).format('HH:MM')}
                            </p>
                        </Row>
                    </Col>
                    <Col md={3} sm={12}>
                        <Row>
                            <p>
                                <strong>Arrival: </strong>
                                {' ' + moment(arrival).format('HH:MM')}
                            </p>
                        </Row>
                    </Col>
                    <Col md={3} sm={12}>
                        <Row>
                            <p>
                                <strong>Duration: </strong> {' ' + hours}h{' '}
                                {mins}m
                            </p>
                        </Row>
                    </Col>
                    <Col md={3} sm={12}>
                        <Row>
                            <p>
                                <strong>Price: </strong> {' ' + currency} {cost}
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 10, number: 2 }}>
                        <Button
                            onClick={() => {
                                console.log(`delete ${_id}`)
                            }}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}
