import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../../State/ActionCreators'

import Login from './index'

const mapStateToProps = state => {
    const containerState = Object.assign(
        {},
        state.app
    )
    return containerState
}
const mapDispatchToProps = dispatch => {
    const merge = Object.assign(
        {},
        ActionCreators
    )
    return bindActionCreators(merge, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)