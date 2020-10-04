import { App } from '../../Models'
import {
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
