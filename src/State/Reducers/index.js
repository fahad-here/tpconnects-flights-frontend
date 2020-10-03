import { combineReducers } from 'redux'

import Reducer from './Reducer'

const reducers = combineReducers({
    app: Reducer
})

export default reducers
