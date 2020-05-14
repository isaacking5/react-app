import { observable, action } from "mobx"
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {create} from 'apisauce'
import { networkCallWithApisauce} from '../../utils/APIUtils'
import {apiMethods} from '../../constants/APIConstants'
import UserFixtureServices from '../../services/userServices/index.fixture'
class UsersStore{
    @observable getUsersApiStatus
    @observable getUserApiError
    @observable users
    userService

    constructor (userService){
        this.userService = userService
        this.init()
    }

    @action.bound
    setUserAPIResponse(UsersResponse){
        this.users = UsersResponse.map((user)=> user.name)
    }

    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus = apiStatus
    }

    @action.bound
    setUsersAPIError(Error){
        this.getUserApiError = Error
    }

    @action.bound
    getUsersAPI(){
        const userService = this.userService.getUsersAPI()
        // const api = create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/'
        // })
        // const userPromise = networkCallWithApisauce(api, 'users/', {}, apiMethods.get)
        return bindPromiseWithOnSuccess(userService)
        .to(this.setUsersAPIStatus, this.setUserAPIResponse)
        .catch(this.setUsersAPIError)
    }

    @action.bound
    init(){
        this.getUsersApiStatus = API_INITIAL
        this.getUserApiError = null
        this.users = []
    }

    @action.bound
    clearStore(){
        this.init()
    }
}

// const userService = new UserFixtureServices()

// const userStore = new UsersStore(userService)
export default UsersStore