import React from 'react'
import { inject } from "mobx-react"
import {toast, Slide} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProductModel from '../../stores/ProductsModel'
import {
        EachProductBlock,FreeDelivery, ImgBlock, EachList, HorzontalLine, 
        Price, OnlyPrice, Installment, AddToCartButton, SucessToast,
        SucessIcon,SucessMessage
    } from '../../styledComponents'

type EachProductProps = {
    eachItem : ProductModel
    cartStore : any
}
toast.configure({
    autoClose: 2500,
    hideProgressBar: true,
    transition:Slide,
    closeButton:false,
    pauseOnHover:false,
})


const IconLink = "https://cdn.imgbin.com/8/22/2/imgbin-computer-icons-check-mark-presentation-symbol-check-list-green-and-white-check-illustration-zxEN5KtkWMEYVQS9p4z0N1bEJ.jpg"
const MyToast = () =>(
          <SucessToast>
             <SucessIcon alt="img" src={IconLink}/>
             <SucessMessage>product added to your cart</SucessMessage>
          </SucessToast>)



@inject("cartStore")
class EachProduct extends React.Component<EachProductProps>{

    onClickAddToCart = () =>{
        const {eachItem} = this.props
        // this.props.cartStore.onClickAddToCart(eachItem.productId)
        this.props.cartStore.onClickAddToCart(eachItem)

        toast.warn(<MyToast />, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
    }
    render(){
        const {eachItem} = this.props
        return(
            <EachList>
                  <EachProductBlock>
                    <ImgBlock src = {eachItem.imageURL}/>
                    {eachItem.isShippingFree ?
                        <FreeDelivery src = {require(`../../components/Assets/freeDelivery.png`)} />: null
                    }
                    <p>{eachItem.title}</p>
                    <HorzontalLine />
                    <Price>{eachItem.currencyFormat} <OnlyPrice>{eachItem.price}</OnlyPrice></Price>
                    <Installment>
                        or {eachItem.installmentCount} x {eachItem.currencyFormat} {(Number(eachItem.price) / Number(eachItem.installmentCount)).toFixed(2)}
                    </Installment>
                    <AddToCartButton onClick={this.onClickAddToCart}>Add to Cart</AddToCartButton>
                  </EachProductBlock>
            </EachList>
        )
    }
}

export default EachProduct

