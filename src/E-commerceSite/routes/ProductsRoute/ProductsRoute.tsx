import React from 'react'
import { inject, observer} from "mobx-react"
import {Redirect, withRouter} from 'react-router-dom'
import { observable } from "mobx"
import {SIGN_IN_PATH, END_POINTS} from '../../constants/ProductRouteConstants/index'
import SizeFilter from '../../components/ProductPage/SizeFiltered'
import Header from '../../components/ProductPage/Header'
import EachProduct from '../../components/ProductPage/EachProduct'
import Products from '../../components/ProductPage/index'
import {Pagination} from '../../components/Pagination/index'

 import {ProductDisplayContainer, ListOfProductsBlock, ProductsListBlock,} from '../../styledComponents/index'

type ProductsRouteProps = {
    authStore : any
    history : any
    productsStore: any
    cartStore:any
}
@inject("authStore", "productsStore", "cartStore")
@observer
class ProductsRoute extends React.Component<ProductsRouteProps>{
    @observable isUserSignOut = false;
    @observable numberOfProductsPerPage = 4;
    @observable offSet = 0;
    currentPage = 1
    componentDidMount = () =>{
        this.doNetWorkCallForProducts()
    }

    getProductsStore = () =>{
        return this.props.productsStore
    }

    doNetWorkCallForProducts = () =>{
        END_POINTS.products = `products?limit=${this.numberOfProductsPerPage}&offset=${this.offSet}`
        this.getProductsStore().getProductsAPI()
    }

    gotoNextPage = () => {
        this.offSet += this.numberOfProductsPerPage
        this.currentPage += 1
        this.doNetWorkCallForProducts()
    }

    gotoPrevPage = () =>{
        this.offSet -= this.numberOfProductsPerPage
        this.currentPage -= 1
        this.doNetWorkCallForProducts()
    }

    renderSuccessUI = observer(() =>{
        const{Products, onChangeSortBy, totalProducts} = this.getProductsStore()
        const ListOfItems = Products.map((eachItem)=>{
            return(<EachProduct key= {Math.random().toString()} eachItem = {eachItem} cartStore={this.props.cartStore}/>)
        })

        return (
            <div>
            <ProductDisplayContainer>
                <SizeFilter onSelectSize = {this.getProductsStore().onSelectSize}/>
                <ProductsListBlock>
                    <Header productsCount={Products.length}  onChangeSortBy={onChangeSortBy}/>
                    <ListOfProductsBlock>{ListOfItems}</ListOfProductsBlock>
                </ProductsListBlock>
            </ProductDisplayContainer>
            <Pagination gotoNextPage = {this.gotoNextPage} 
                        gotoPrevPage = {this.gotoPrevPage}
                        totalProducts = {totalProducts}
                        numberOfProductsPerPage = {this.numberOfProductsPerPage}
                        currentPage ={this.currentPage}
            />
            </div>
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
        return(
            <Products 
                isUserSignOut = {this.isUserSignOut}
                isUserLoggedOut = {this.isUserLoggedOut}
                getProductsStore = {this.getProductsStore}
                SignOutProductPage = {this.SignOutProductPage}
                doNetWorkCallForProducts = {this.doNetWorkCallForProducts}
                renderSuccessUI = {this.renderSuccessUI}
            />
        )
    }
}


export default ProductsRoute



// export {default as Products} from '../../components/ProductPage/index'