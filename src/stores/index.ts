import UserService from '../services/userServices/index.api'
import UserStore from './usersStore'
import TodoServices from '../services/TodoServices/index.api'
import TodoStore from '../stores/TodoStoreWithNetWorkCall/index'

const userService = new UserService()
const userStore = new UserStore(userService)

const todoService = new TodoServices()
const todoStore = new TodoStore(todoService)

export default {userStore, todoStore}