import React from 'react'
import {CartListBlock} from '../../styledComponents'
import CartItems from './Cartitem'
import EachProduct from "../ProductPage/EachProduct"
import { observer } from "mobx-react"
type CartListProps = {
    cartProductList : any
    getProductDetailsById : Function
    onRemoveCartItem : Function
}

@observer
class CartList extends React.Component<CartListProps>{
    renderCartItems:any = () =>
    {
        const {cartProductList, getProductDetailsById, onRemoveCartItem} = this.props;
        const cartData:any =[];
         cartProductList.forEach((cartModel,key)=>{
          const productDetails =  getProductDetailsById(cartModel.productId)
          cartData.push(<CartItems key={Math.random()}  
                        productDetails = {productDetails} 
                        quantity={cartModel.quantity}
                        onRemoveCartItem={onRemoveCartItem}
                    />)
        })
        return cartData;

    }


    render(){
        return (
            <CartListBlock>
                {this.renderCartItems()}
            </CartListBlock>
        )
    }
}

export default CartList