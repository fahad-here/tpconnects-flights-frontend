import BigNumber from 'bignumber.js'

export default class TokenHandler {
    set(_token) {
        localStorage.setItem('token', _token)
        localStorage.setItem('iat', new Date().getTime().toString())
    }

    setRefresh(_token) {
        localStorage.setItem('refresh', _token)
        localStorage.setItem('iatRefresh', new Date().getTime().toString())
    }

    get() {
        const token = localStorage.getItem('token')
        const refresh = localStorage.getItem('refresh')
        let expiry = 0
        let refreshExpiry = 0
        if (token && refresh) {
            const iat = localStorage.getItem('iat')
            const iatRefresh = localStorage.getItem('iatRefresh')
            expiry = new BigNumber(iat).plus(7 * 24 * 60 * 60 * 1000).toNumber()
            refreshExpiry = new BigNumber(iatRefresh)
                .plus(30 * 24 * 60 * 60 * 1000)
                .toNumber()
        }
        return {
            token,
            refresh,
            expiry,
            refreshExpiry
        }
    }

    isAccessValid() {
        const { token, expiry } = this.get()
        if (token) {
            const currentTime = new Date().getTime()
            return new BigNumber(expiry).isGreaterThan(currentTime)
        }
        return false
    }

    isRefreshValid() {
        const { refresh, refreshExpiry } = this.get()
        if (refresh) {
            const currentTime = new Date().getTime()
            return new BigNumber(refreshExpiry).isGreaterThan(currentTime)
        }
        return false
    }

    isLoggedIn() {
        const { token, refresh } = this.get()
        if (refresh && token) return this.isRefreshValid()
        return false
    }

    logout() {
        localStorage.clear()
    }
}
