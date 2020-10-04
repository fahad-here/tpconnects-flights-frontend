import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'

const { Control } = Form
const Login = (props) => {
    const {
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
    } = props
    console.log(values)
    console.log(errors)
    console.log(isValid)
    console.log(errors.password)
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md='12' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Control
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    isValid={!errors.email}
                    isInvalid={!!errors.email}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='12' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Control
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    isValid={!errors.password}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Button
                className='btn btn-login'
                type='submit'
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Loading...' : 'Login'}
            </Button>
        </Form>
    )
}

export default Login
