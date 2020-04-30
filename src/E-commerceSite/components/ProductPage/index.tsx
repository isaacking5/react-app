import React from 'react'
import { inject, observer } from "mobx-react"
import {Redirect, withRouter} from 'react-router-dom'
import { observable } from "mobx"
import LoadingWrapperWithFailure from "../../../common/LoadingWrapperWithFailure"
import {
    SignOutButton,ProductPageHeader,
    ProductDisplayContainer, ListOfProductsBlock, ProductsListBlock,
} from '../../styledComponents'
import {SIGN_IN_PATH} from '../../constants/ProductRouteConstants/index'
import { getAccessToken } from '../../utils/StorageUtils'
import SizeFilter from './SizeFiltered'
import Header from './Header'
import CartPage from '../CartPage/index'

import EachProduct from './EachProduct'
import SearchBy from './SearchBy'

type ProductsProps = {
    authStore : any
    history : any
    productsStore: any
    cartStore:any
}
@inject("authStore", "productsStore", "cartStore")
@observer
class Products extends React.Component <ProductsProps>{
    @observable isUserSignOut = false
    componentDidMount = () =>{
        this.doNetWorkCallForProducts()
    }

    getProductsStore = () =>{
        return this.props.productsStore
    }

    doNetWorkCallForProducts = () =>{
        this.getProductsStore().getProductsAPI()
    }

    renderSuccessUI = observer(() =>{
        const{Products, onChangeSortBy} = this.getProductsStore()

        const ListOfItems = Products.map((eachItem)=>{
            return(<EachProduct key= {Math.random().toString()} eachItem = {eachItem} cartStore={this.props.cartStore}/>)
        })

        return (
            <ProductDisplayContainer>
                <SizeFilter onSelectSize = {this.getProductsStore().onSelectSize}/>
                <ProductsListBlock>
                    <Header productsCount={Products.length}  onChangeSortBy={onChangeSortBy}/>
                    <ListOfProductsBlock>{ListOfItems}</ListOfProductsBlock>
                </ProductsListBlock>
            </ProductDisplayContainer>
            )
    })

    SignOutProductPage = () =>{
        const {userSignOut} = this.props.authStore
        userSignOut()
        this.isUserSignOut = true
    }

    isUserLoggedOut = () =>{
        return(<Redirect 
            to = {{pathname : SIGN_IN_PATH}}
        />)
    }


    render(){
        const {isCartEmpty, cartProductList, getProductDetailsById, 
            totalCartAmount, noOfProductsInCart, clearCart, onRemoveCartItem} = this.props.cartStore
        if(this.isUserSignOut)
           return this.isUserLoggedOut()
        if(getAccessToken() === undefined)
            return this.isUserLoggedOut()
        const {getProductsListAPIStatus, getProductsListAPIError} = this.getProductsStore()
        return (
            <div className = "relative">
                <ProductPageHeader>
                    <div><SignOutButton onClick = {this.SignOutProductPage}>Sign Out</SignOutButton></div>
                    <SearchBy />
                    <CartPage isCartEmpty={isCartEmpty} 
                               cartProductList={cartProductList} 
                               getProductDetailsById={getProductDetailsById}
                               totalCartAmount = {totalCartAmount}
                               noOfProductsInCart = {noOfProductsInCart}
                               clearCart = {clearCart}
                               onRemoveCartItem = {onRemoveCartItem}
                    />
                </ProductPageHeader>
                <div>
                    <LoadingWrapperWithFailure 
                        apiStatus = {getProductsListAPIStatus}
                        apiError = {getProductsListAPIError}
                        onRetryClick = {this.doNetWorkCallForProducts}
                        renderSuccessUI = {this.renderSuccessUI}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(Products)