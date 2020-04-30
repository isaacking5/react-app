import { observable } from "mobx";

class ProductModel{
    @observable productId
    @observable availableSize
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentCount
    @observable isShippingFree
    @observable price 
    @observable  printStyle
    @observable title
    @observable imageURL

    constructor(ProductDetails){
        this.productId = ProductDetails.id
        this.availableSize = ProductDetails.availableSizes
        this.currencyFormat = ProductDetails.currencyFormat
        this.currencyId = ProductDetails.currencyId
        this.description = ProductDetails.description
        this.installmentCount = ProductDetails.installments
        this.isShippingFree = ProductDetails.isFreeShipping
        this.price = ProductDetails.price
        this.printStyle = ProductDetails.style
        this.title = ProductDetails.title
        this.imageURL = ProductDetails.image
    }
}

export default ProductModel