import React, { Component } from 'react'
import TokenHandler from '../../../../Utils/TokenHandler'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import FlightCard from '../../../../Components/FlightCard'
import './flight-list.scss'
const tokenHandler = new TokenHandler()

export default class FlightList extends Component {
    componentDidMount = async () => {
        if (tokenHandler.isLoggedIn()) await this.props.getFlights()
        else tokenHandler.logout()
    }

    render() {
        const { flights } = this.props
        return (
            <Container maxWidth='md'>
                <div className='flights-card'>
                    <Row>
                        <Col xs={12}>
                            <h1>Flights</h1>
                        </Col>
                    </Row>
                    <Row className={'my-4 py-4'}>
                        <Col md={{ offset: 10, number: 2 }}>
                            <Button className={'mx-4'}>Add Flight</Button>
                        </Col>
                    </Row>
                    <Row>
                        {flights && flights.length === 0 ? (
                            <Col className={'my-4 py-4'}>
                                <Row className='justify-content-md-center'>
                                    <h4 className={'mx-4 px-4'}>
                                        No flights have been added, please add
                                        to view the list here
                                    </h4>
                                </Row>
                            </Col>
                        ) : (
                            <Col xs={12}>
                                <ListGroup>
                                    {flights.map((flight) => {
                                        return (
                                            <FlightCard
                                                key={flight._id}
                                                flightDetails={flight}
                                            />
                                        )
                                    })}
                                </ListGroup>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
        )
    }
}