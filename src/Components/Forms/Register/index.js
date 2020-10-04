import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
const { Control } = Form
const Register = (props) => {
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
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md='12' controlId='name'>
                <Form.Label>Full name</Form.Label>
                <Control
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    isValid={!errors.name}
                    isInvalid={!!errors.name}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
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
            <Form.Group as={Col} md='12' controlId='role'>
                <Form.Label>Role</Form.Label>
                <Form.Control
                    as='select'
                    custom
                    isValid={!errors.role}
                    isInvalid={!!errors.role}
                >
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>User</option>
                </Form.Control>
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Button
                className='btn btn-register'
                type='submit'
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Loading...' : 'Register'}
            </Button>
        </Form>
    )
}

export default Register
