import React from 'react'
import { observable} from "mobx"
import { observer, inject } from "mobx-react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {
    CartIcon, CartBlock, Close, CartHeader,CartContainer,
    CartHeaderData, CartText, IntialMessage, CartBody, TotalCartItems,TotalCartItemsInside

} from '../../styledComponents'
import CartList from './CartList'
import SubTotal from './SubTotal'

type CartpageProps = {
    isCartEmpty : boolean
    cartProductList: any
    getProductDetailsById : Function
    totalCartAmount : Number
    noOfProductsInCart : Number
    clearCart: Function
    onRemoveCartItem : Function
}

@observer
class CartPage extends React.Component<CartpageProps>{
    @observable shouldDisplayCart = false

    showCart = () =>{
        this.shouldDisplayCart = !this.shouldDisplayCart
    }
    render(){
        const {isCartEmpty, cartProductList, getProductDetailsById, 
            totalCartAmount, noOfProductsInCart, clearCart, onRemoveCartItem} = this.props
        return(
            <CartContainer>
                    <CartIcon onClick = {this.showCart}>  
                        {<AiOutlineShoppingCart className="h-full w-full"/>}
                        <TotalCartItems>{noOfProductsInCart}</TotalCartItems>  
                    </CartIcon>
                    <CartBlock cartStatus = {this.shouldDisplayCart}>
                        <CartHeader>
                            <div className="relative">
                                <Close onClick = {this.showCart} cartStatus = {this.shouldDisplayCart}>X</Close>
                            </div>
                            <CartHeaderData>
                                <AiOutlineShoppingCart className="h-12 w-12 text-gray-100" />
                                <TotalCartItemsInside>{noOfProductsInCart}</TotalCartItemsInside>
                                <CartText>Cart</CartText>
                            </CartHeaderData>
                        </CartHeader>
                        <CartBody>
                            {isCartEmpty?
                                <IntialMessage>Add some Products in your Cart</IntialMessage>:
                                <CartList cartProductList={cartProductList} 
                                          getProductDetailsById={getProductDetailsById}
                                          onRemoveCartItem = {onRemoveCartItem}
                                />
                            }
                            <SubTotal totalCartAmount = {totalCartAmount}  
                                      getProductDetailsById={getProductDetailsById}
                                      clearCart = {clearCart}
                                      isCartEmpty = {isCartEmpty}
                                />
                        </CartBody>
                    </CartBlock>
            </CartContainer>
        )
    }
}

export default CartPage