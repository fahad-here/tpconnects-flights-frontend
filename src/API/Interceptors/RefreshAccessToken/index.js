import API from '../../index'
import TokenHandler from '../../../Utils/TokenHandler'

const tokenHandler = new TokenHandler()

const RefreshAccessToken = async (config) => {
    if (tokenHandler.get().refresh && tokenHandler.isRefreshValid()) {
        if (!config.url.includes('/auth/refresh'))
            if (!tokenHandler.isAccessValid())
                try {
                    const api = new API()
                    const response = await api.refreshAccess()
                    tokenHandler.set(response.data.token)
                    config.headers['Authorization'] = response.data.token
                    return config
                } catch (e) {
                    return config
                }
    }
    return config
}

export default RefreshAccessToken
