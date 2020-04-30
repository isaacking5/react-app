import ProductsServices from '../services/ProductsServices/index.api'
import ProductsStore from '../stores/ProductsStore/index'
import CartStore from '../stores/CartStore'

const productsServices = new ProductsServices()
const productsStore = new ProductsStore(productsServices)

const cartStore = new CartStore(productsStore) 



export default {productsStore, cartStore}