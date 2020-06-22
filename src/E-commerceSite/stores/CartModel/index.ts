import { observable, action } from "mobx";

class CartModel {
  @observable cartId
  @observable product
  @observable quantity
  constructor(cartData){
    this.cartId = cartData.cartId
    this.product = cartData.product
    this.quantity = cartData.quantity
  }

  @action.bound
  incrementQuantity(){
      this.quantity = this.quantity+1
  }
}

export default CartModel