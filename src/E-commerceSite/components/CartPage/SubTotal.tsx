import React from 'react'
import { observer } from "mobx-react"
import { observable } from "mobx"
import {CartFotoor,Subtotal, AmountBlock, Amount, Checkout,} from '../../styledComponents'


type SubTotalProps = {
    totalCartAmount : Number
    getProductDetailsById:Function
    clearCart: Function
    isCartEmpty : boolean
}
@observer
class SubTotal extends React.Component<SubTotalProps>{
    clearCartList = () =>{
        const {clearCart} = this.props
        clearCart()
    }

    
    render(){
        const {totalCartAmount, getProductDetailsById, isCartEmpty} = this.props
        return (
            <CartFotoor>
                    <AmountBlock>
                      <Subtotal>SUBTOTAL</Subtotal>
                      <Amount>₹ {totalCartAmount}</Amount>
                    </AmountBlock>
                    <Checkout  disabled = {isCartEmpty}onClick={this.clearCartList}>CHECKOUT</Checkout>
            </CartFotoor>
        )
    }
}

export default SubTotal