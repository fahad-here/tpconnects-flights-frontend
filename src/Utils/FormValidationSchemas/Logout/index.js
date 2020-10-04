import React from 'react'
import TokenHandler from '../../../Utils/TokenHandler'

const tokenHandler = new TokenHandler()

export default class Logout extends React.Component {
    _logout = () => {
        tokenHandler.logout()
        this.props.history.push('/')
    }
    componentDidMount() {
        this._logout()
    }
    render() {
        return <div>Logout</div>
    }
}
