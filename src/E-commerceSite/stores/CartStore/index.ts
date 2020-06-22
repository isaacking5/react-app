import { observable, action, computed } from "mobx";
import CartModel from '../CartModel/index'

class CartStore{
    @observable cartProductList = new Map()
    // @observable cartProductListDatabase = []
    productStore

    constructor (productsStore){
        console.log("cartStore constructor")
        this.productStore = productsStore

    }

    @action.bound
    onClickAddToCart(product){
        console.log("products",product)
        const cartId = Math.random();
        let noDuplicate = true
        this.cartProductList.forEach((eachModel,key)=>{
            if(eachModel.product.productId === product.productId){
                this.cartProductList.get(eachModel.incrementQuantity());
                noDuplicate =  false
            }
        })
            if(noDuplicate){
                const cartModel = new CartModel({quantity:1, cartId:cartId, product:product})
                this.cartProductList.set(cartId, cartModel)
            }
        console.log(this.cartProductList)
    }

    @action.bound
    onRemoveCartItem(removeId){
        this.cartProductList.forEach((cartModel, key)=>{
            if(cartModel.product.productId === removeId){
                console.log("commimg",cartModel.cartId)
                this.cartProductList.delete(cartModel.cartId)
            }
        })
        console.log(this.cartProductList.size)
    }

    @action.bound
    clearCart(){
        alert("Thank you for shopping with us.. 😊 \nYour products will be delivered in 3 days to the address mentioned in your profiles.\n")
        this.cartProductList =new Map()
    }

    @action.bound
    getProductDetailsById(id){
        let product
            this.cartProductList.forEach((cartModel, key)=>{
                if(cartModel.product.productId === id){
                    product = cartModel.product
                }
            })
            return product
    }

    @computed
    get isCartEmpty(){
        if(this.cartProductList.size === 0)
            return true
        return false
    }

    @computed
    get totalCartAmount(){
        let totalProductsAmount = 0
        this.cartProductList.forEach((eachModel)=>{
            console.log("quantity",typeof eachModel.quantity, "price",typeof eachModel.product.price)
            // this.productStore.ProductsList.forEach((eachProduct)=>{
                // if(eachModel.productId === eachProduct.productId){
                    totalProductsAmount = totalProductsAmount + eachModel.product.quantity * eachModel.product.price
                // }
            })
        // })
        console.log("tP",totalProductsAmount)
        return totalProductsAmount.toFixed(2)
    }

    @computed
    get noOfProductsInCart(){
        let productsInCarts = 0
        this.cartProductList.forEach((eachModel)=>{
            productsInCarts = productsInCarts + eachModel.quantity
        })
        return productsInCarts;
    }
}

export default CartStore




                                            //version 1

// import { observable, action, computed } from "mobx";
// import CartModel from '../CartModel/index'

// class CartStore{
//     @observable cartProductList = new Map()
//     // @observable cartProductListDatabase = []
//     productStore

//     constructor (productsStore){
//         console.log("cartStore constructor")
//         this.productStore = productsStore

//     }

//     @action.bound
//     onClickAddToCart(productId){
//         const cartId = Math.random();
//         let noDuplicate = true
//         this.cartProductList.forEach((eachModel,key)=>{
//             if(eachModel.productId === productId){
//                 this.cartProductList.get(eachModel.incrementQuantity());
//                 noDuplicate =  false
//             }
//         })
//             if(noDuplicate){
//                 const cartModel = new CartModel({quantity:1, cartId:cartId, productId:productId})
//                 this.cartProductList.set(cartId, cartModel)
//             }
//     }

//     @action.bound
//     onRemoveCartItem(removeId){
//         this.cartProductList.forEach((cartModel, key)=>{
//             if(cartModel.productId === removeId){
//                 console.log("commimg",cartModel.cartId)
//                 this.cartProductList.delete(cartModel.cartId)
//             }
//         })
//         console.log(this.cartProductList.size)
//     }

//     @action.bound
//     clearCart(){
//         alert("Thank you for shopping with us.. 😊 \nYour products will be delivered in 3 days to the address mentioned in your profiles.\n")
//         this.cartProductList =new Map()
//     }

//     @action.bound
//     getProductDetailsById(id){
//         return (
//             this.productStore.ProductsList.find((eachEl)=>{
//                 if(eachEl.productId === id)
//                     return eachEl
//             })
//         )
//     }

//     @computed
//     get isCartEmpty(){
//         if(this.cartProductList.size === 0)
//             return true
//         return false
//     }

//     @computed
//     get totalCartAmount(){
//         let totalProductsAmount = 0
//         this.cartProductList.forEach((eachModel)=>{
//             this.productStore.ProductsList.forEach((eachProduct)=>{
//                 if(eachModel.productId === eachProduct.productId){
//                     totalProductsAmount = totalProductsAmount + eachModel.quantity * eachProduct.price
//                 }
//             })
//         })
//         console.log(totalProductsAmount)
//         return totalProductsAmount.toFixed(2)
//     }

//     @computed
//     get noOfProductsInCart(){
//         let productsInCarts = 0
//         this.cartProductList.forEach((eachModel)=>{
//             productsInCarts = productsInCarts + eachModel.quantity
//         })
//         return productsInCarts;
//     }
// }

// export default CartStore