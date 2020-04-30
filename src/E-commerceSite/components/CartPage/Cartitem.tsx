import React from 'react'

import {CartItemContainer, ImageBlock, CartImg, Img, ImageDetailsBlock, 
    RemoveFromCart, CartProductTitle, CartProductStyled, ProductQuantity,
    RemoveItems, ProductAmount

    } from '../../styledComponents'
type CartItemsProps = {
    productDetails:any
    quantity:Number
    onRemoveCartItem : Function
}
class CartItems extends React.Component<CartItemsProps>{
    removeCartItem = () =>{
        const {onRemoveCartItem, productDetails} = this.props
        onRemoveCartItem(productDetails.productId)
    }
    render(){
        const {productDetails, quantity} = this.props
        return (
        <CartItemContainer>
            <ImageBlock>
                <CartImg>
                    <Img src={productDetails.imageURL}/>
                </CartImg>
                <ImageDetailsBlock>
                    <CartProductTitle>{productDetails.title}</CartProductTitle>
                    <CartProductStyled>{productDetails.printStyle}</CartProductStyled>
                    <ProductQuantity>Quantity: {quantity}</ProductQuantity>
                </ImageDetailsBlock>
            </ImageBlock>
            <RemoveFromCart>
                <RemoveItems onClick={this.removeCartItem}>X</RemoveItems>
                <ProductAmount>{productDetails.currencyFormat} {productDetails.price}</ProductAmount>
            </RemoveFromCart>
        </CartItemContainer>
        )
    }
}

export default CartItems