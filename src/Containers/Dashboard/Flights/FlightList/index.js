import React, { Component } from 'react'
import TokenHandler from '../../../../Utils/TokenHandler'
import { Button, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap'
import FlightCard from '../../../../Components/FlightCard'
import './flight-list.scss'

const tokenHandler = new TokenHandler()

export default class FlightList extends Component {
    componentDidMount = async () => {
        if (tokenHandler.isLoggedIn()) await this.props.getFlights()
        else tokenHandler.logout()
    }

    _onDelete = (id) => {
        this.props.deleteFlight(id)
    }

    _closeBaseDialog = () => {
        this.props.resetDialog('base')
        if (!this.props.status.deleteFlight.error)
            this.props.history.push('/dashboard')
    }

    render() {
        const { flights } = this.props
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
                <div className='flights-card'>
                    <Row>
                        <Col xs={12}>
                            <h1>Flights</h1>
                        </Col>
                    </Row>
                    <Row className={'my-4 py-4'}>
                        <Col md={{ offset: 10, number: 2 }}>
                            <Button
                                className={'mx-4'}
                                onClick={() =>
                                    this.props.history.push(
                                        '/dashboard/flights/new'
                                    )
                                }
                            >
                                Add Flight
                            </Button>
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
                                                onDelete={this._onDelete}
                                                {...this.props}
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
