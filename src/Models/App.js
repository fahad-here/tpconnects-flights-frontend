export const App = {
    dialogs: {
        base: {
            open: false,
            title: null,
            message: null,
            htmlMessage: null,
            loading: false,
            loadingMessage: null
        }
    },
    status: {
        login: {
            loading: false,
            error: false,
            errorMessage: null
        },
        register: {
            loading: false,
            error: false,
            errorMessage: null
        },
        user: {
            loading: false,
            error: false,
            errorMessage: null
        },
        getFlights: {
            loading: false,
            error: false,
            errorMessage: null
        },
        addNewFlight: {
            loading: false,
            error: false,
            errorMessage: null
        }
    },
    user: null,
    flights: []
}
