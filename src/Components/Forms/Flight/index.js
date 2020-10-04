import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import AirportData from '../../../air.json'
import CurrencyData from '../../../currency.json'
import _ from 'lodash'
import VirtualizedSelect from 'react-virtualized-select'
import Datetime from 'react-datetime'

const airport = AirportData.filter((data) => (data.iata ? data : false))
const airports = airport.map((data) => {
    return { label: data.iata, value: data.iata }
})

const currencies = _.keys(CurrencyData).map((data) => {
    return {
        label: CurrencyData[data],
        value: data
    }
})

const Flight = (props) => {
    const {
        isSubmitting,
        handleSubmit,
        handleChange,
        handleSelect,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldValue
    } = props

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md='12' controlId='origin'>
                <Form.Label>Origin: {values.origin}</Form.Label>
                <Form.Control
                    as={VirtualizedSelect}
                    custom
                    isValid={!errors.origin}
                    isInvalid={!!errors.origin}
                    options={airports}
                    onChange={(val1) => setFieldValue('origin', val1.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.origin}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='destination'>
                <Form.Label>Destination: {values.destination}</Form.Label>
                <Form.Control
                    as={VirtualizedSelect}
                    custom
                    isValid={!errors.destination}
                    isInvalid={!!errors.destination}
                    options={airports}
                    onChange={(val1) =>
                        setFieldValue('destination', val1.value)
                    }
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.origin}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='departure'>
                <Form.Label>Departure Time: {values.departure}</Form.Label>
                <Form.Control
                    as={Datetime}
                    custom
                    isValid={!errors.departure}
                    isInvalid={!!errors.departure}
                    options={airports}
                    onChange={(val1) =>
                        setFieldValue('departure', val1.toDate().toString())
                    }
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.departure}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='arrival'>
                <Form.Label>Arrival Time: {values.arrival}</Form.Label>
                <Form.Control
                    as={Datetime}
                    custom
                    isValid={!errors.arrival}
                    isInvalid={!!errors.arrival}
                    options={airports}
                    onChange={(val1) =>
                        setFieldValue('arrival', val1.toDate().toString())
                    }
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.arrival}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='cost'>
                <Form.Label>Flight Cost</Form.Label>
                <Form.Control
                    type='number'
                    name='cost'
                    value={values.cost}
                    onChange={handleChange}
                    isValid={!errors.cost}
                    isInvalid={!!errors.cost}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.cost}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='currency'>
                <Form.Label>Currency: {values.currency}</Form.Label>
                <Form.Control
                    as={VirtualizedSelect}
                    custom
                    isValid={!errors.currency}
                    isInvalid={!!errors.currency}
                    options={currencies}
                    onChange={(val1) => setFieldValue('currency', val1.value)}
                ></Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.currency}
                </Form.Control.Feedback>
            </Form.Group>
            <Button className='btn btn-login' type='submit'>
                Add
            </Button>
        </Form>
    )
}

export default Flight
