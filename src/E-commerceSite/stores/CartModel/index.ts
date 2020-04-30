import { observable, action } from "mobx";

class CartModel {
  @observable cartId
  @observable productId
  @observable quantity
  constructor(cartData){
    this.cartId = cartData.cartId
    this.productId = cartData.productId
    this.quantity = cartData.quantity
  }

  @action.bound
  incrementQuantity(){
      this.quantity = this.quantity+1
  }
}

export default CartModel