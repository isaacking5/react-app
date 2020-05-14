import React from 'react'
import {render} from '@testing-library/react'
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
  } from "@ib/api-constants";
import ProductsServices from "../../services/ProductsServices/index.api";
import ProductsStore from '.'


  describe("product store test cases", () =>{
      let productAPI;
      let productStore;
  

  beforeEach(() =>{
      productAPI = new ProductsServices()
      productStore = new ProductsStore(productAPI)
  })

  it("should test initialisation of product store", ()=>{
    productStore.init()
    expect(productStore.getProductsListAPIStatus).toBe(API_INITIAL)
    expect(productStore.getProductsListAPIError).toBe(null)
    expect(productStore.ProductsList.length).toBe(0)
    expect(productStore.sizeFilter.length).toBe(0)
    expect(productStore.sortBy).toBe("Select")
    expect(productStore.searchedItem).toBe(null)
  })

  it("Should test ProductStore API", () =>{
    
  })
})