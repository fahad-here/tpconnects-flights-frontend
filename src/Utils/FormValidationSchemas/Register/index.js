import * as yup from 'yup'

export const RegisterYup = yup.object().shape({
    name: yup.string('Please enter your name').required('Name is required'),
    email: yup
        .string('Please enter your email')
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Please enter your password')
        .required('Password is required'),
    role: yup
        .string('Please select your role')
        .required('Role selection is required')
})
