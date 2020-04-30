import AuthStore from './AuthStore/index'
import AuthServices from '../services/AuthServices/index.api'

const authService = new AuthServices()
const authStore = new AuthStore(authService)

export default {authStore}