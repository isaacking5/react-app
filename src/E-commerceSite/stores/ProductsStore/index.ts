import { observable, action, computed, toJS } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import ProductModel from '../ProductsModel/index'
import EachProduct from "../../components/ProductPage/EachProduct";
class ProductsStore{
    @observable ProductsList
    @observable getProductsListAPIStatus
    @observable getProductsListAPIError
    @observable sizeFilter
    @observable sortBy
    productsAPIServices

    constructor( productsAPIServices){
        this. productsAPIServices =  productsAPIServices
        this.init()
    }

    @action.bound
    init(){
        this.ProductsList = []//observable([])
        this.sizeFilter = [];
        this.sortBy = "Select" // accending, decending
        this.getProductsListAPIStatus = API_INITIAL
        this.getProductsListAPIError = null
    }

    @action.bound
    setProductsAPIResponse(response){
        this.getProductsList(response)
    }

    @action.bound
    getProductsList(productsResponse){
        productsResponse.forEach((eachItem)=>{
            const productModel = new ProductModel(eachItem)
            this.ProductsList.push(productModel)
        })
    }

    @action.bound
    setProductsAPIStatus(apiStatus){
        this.getProductsListAPIStatus = apiStatus
    }

    @action.bound
    setProductsAPIError(apiError){
        this.getProductsListAPIError = apiError
    }
    getProductsAPI(){
        this.ClearStore()
        const  productsAPIServices = this. productsAPIServices.getProductsAPI()
        return bindPromiseWithOnSuccess( productsAPIServices)
        .to(this.setProductsAPIStatus, this.setProductsAPIResponse)
        .catch(this.setProductsAPIError)
    }

    @action.bound
    ClearStore(){
        this.init()
    }

    @action.bound
    onChangeSortBy(value){
        this.sortBy = value
    }

    @action.bound
    onSelectSize(size){
       const sizeInArray = this.sizeFilter.find((eachEl) =>{
          return eachEl === size
       })

       if(sizeInArray === undefined)
            this.sizeFilter.push(size)
        else
            this.sizeFilter = this.sizeFilter.filter((eachEl)=>{
                return eachEl !== size
            })

        // this.Products
    }

    @computed
    get Products(){
        return this.sortedAndFilteredProducts
    }
    @computed
    get sortedAndFilteredProducts(){
        if(this.sizeFilter.length <= 0){
            switch(this.sortBy){
                case "Select":
                    return this.ProductsList
                case "Accending":
                       return this.ProductsList.sort((a, b) => (a.price > b.price) ? 1 : -1)
                case "Descending":
                    return this.ProductsList.sort((a, b) => (a.price < b.price) ? 1 : -1)
            }
            return this.ProductsList
        }
        else{
         
            let products:any = []
          

                this.ProductsList.forEach((eachElement)=>
                {
                    if(eachElement.availableSize.some((size)=> this.sizeFilter.includes(size)))
                    {
                        products.push(eachElement);
                    }
                })
                switch(this.sortBy){
                    case "Select":
                        return products
                    case "Accending":
                           return products.sort((a, b) => (a.price > b.price) ? 1 : -1)
                    case "Descending":
                        return products.sort((a, b) => (a.price < b.price) ? 1 : -1)
                }
        }
    }

    @computed
    get totalNoOfProductsDisplayed(){
        return ""
    }
}


export default ProductsStore

// const productStore = 