import * as yup from 'yup'

export const FlightYup = yup.object().shape({
    origin: yup
        .string('Please select the origin')
        .required('Origin airport is required'),
    destination: yup
        .string('Please select the destination')
        .required('Destination airport is required'),
    currency: yup
        .string('Please select the currency')
        .required('Currency is required'),
    arrival: yup
        .date('Please select a date and time')
        .required('Date and time are required'),
    departure: yup
        .date('Please select a date and time')
        .required('Date and time are required'),
    cost: yup.number('Please enter the cost').required('Cost is required')
})
