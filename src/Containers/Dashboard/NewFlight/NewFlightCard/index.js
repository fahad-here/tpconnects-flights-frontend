import React, { Component } from 'react'
import './new-flight-card.scss'
import { Formik } from 'formik'
import FormValidationSchemas from '../../../../Utils/FormValidationSchemas'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import FlightForm from '../../../../Components/Forms/Flight'

const { FlightYup } = FormValidationSchemas

export default class NewFlightCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            origin: '',
            destination: '',
            cost: '',
            currency: '',
            departure: '',
            arrival: ''
        }
    }

    _closeBaseDialog = () => {
        this.props.resetDialog('base')
        if (!this.props.status.register.error)
            this.props.history.push('/dashboard')
    }

    _submitNewFlight = async (values, actions) => {
        await this.props.newFlight(
            values.origin,
            values.destination,
            values.departure,
            values.arrival,
            values.currency,
            values.cost
        )
    }

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
                <div className='new-flight-card'>
                    <Row>
                        <Col xs={12}>
                            <h1>New Flight</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col xs={12}>
                            <Card className='card-outer'>
                                <Card.Body className='card-inner'>
                                    <Formik
                                        validationSchema={FlightYup}
                                        onSubmit={this._submitNewFlight}
                                        initialValues={{
                                            origin: '',
                                            destination: '',
                                            cost: '',
                                            currency: '',
                                            departure: '',
                                            arrival: ''
                                        }}
                                        render={(props) => (
                                            <FlightForm {...props} />
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
