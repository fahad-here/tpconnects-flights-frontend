import { App } from '../../Models'
import {
    ADD_NEW_FLIGHT_ERROR,
    ADD_NEW_FLIGHT_LOADING,
    ADD_NEW_FLIGHT_SUCCESS,
    DELETE_FLIGHT_ERROR,
    DELETE_FLIGHT_LOADING,
    DELETE_FLIGHT_SUCCESS,
    GET_FLIGHTS_ERROR,
    GET_FLIGHTS_LOADING,
    GET_FLIGHTS_SUCCESS,
    GET_USER_ERROR,
    GET_USER_LOADING,
    GET_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    RESET_DIALOG
} from '../ActionTypes'

const _deleteFromArrayById = (oldArray, deleteItemId) => {
    const indexFind = oldArray.findIndex(
        (arrayItem) => arrayItem._id === deleteItemId
    )
    return [...oldArray.slice(0, indexFind), ...oldArray.slice(indexFind + 1)]
}

export default function Reducer(state = App, action) {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    login: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    login: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case LOGIN_ERROR:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Error logging in',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    login: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message
                    }
                }
            }
        case REGISTER_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    register: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    register: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case REGISTER_ERROR:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Error signing up',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    register: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message
                    }
                }
            }
        case GET_USER_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    user: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                },
                user: null
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    user: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                },
                user: action.payload
            }
        case GET_USER_ERROR:
            return {
                ...state,
                status: {
                    ...state.status,
                    user: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.message
                    }
                },
                user: null
            }
        case GET_FLIGHTS_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    getFlights: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                },
                flights: []
            }
        case GET_FLIGHTS_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    getFlights: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                },
                flights: action.payload
            }
        case GET_FLIGHTS_ERROR:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Error fetching flights',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    getFlights: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.message
                    }
                },
                flights: []
            }
        case ADD_NEW_FLIGHT_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    addNewFlight: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case ADD_NEW_FLIGHT_SUCCESS:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Add new flight success',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    addNewFlight: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                },
                flights: [...state.flights, action.payload]
            }
        case ADD_NEW_FLIGHT_ERROR:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Error adding new flight',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    addNewFlight: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.message
                    }
                }
            }
        case DELETE_FLIGHT_LOADING:
            return {
                ...state,
                status: {
                    ...state.status,
                    deleteFlight: {
                        loading: true,
                        error: false,
                        errorMessage: null
                    }
                }
            }
        case DELETE_FLIGHT_SUCCESS:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Delete result',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    deleteFlight: {
                        loading: false,
                        error: false,
                        errorMessage: null
                    }
                },
                flights: _deleteFromArrayById(state.flights, action.payload.id)
            }
        case DELETE_FLIGHT_ERROR:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    base: {
                        open: true,
                        title: 'Error deleting flight',
                        message: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message,
                        htmlMessage: null,
                        loading: false,
                        loadingMessage: false
                    }
                },
                status: {
                    ...state.status,
                    deleteFlight: {
                        loading: false,
                        error: true,
                        errorMessage: action.payload.response
                            ? action.payload.response.data.message
                            : action.payload.message
                    }
                }
            }
        case RESET_DIALOG:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.payload]: {
                        ...App.dialogs[action.payload]
                    }
                }
            }
        default:
            return state
    }
}
