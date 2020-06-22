import React, { Component } from 'react';
import {PaginationBlock, ArrowPagination, CurrentPage, BySymbol, TotalPage} from './styledComponent'

type PaginationProps = {
    gotoPrevPage : any
    gotoNextPage : any
    totalProducts : number
    numberOfProductsPerPage: number
    currentPage : number
}
class Pagination extends Component <PaginationProps> {
    render() {
        const {gotoNextPage, gotoPrevPage, totalProducts, numberOfProductsPerPage, currentPage} = this.props
        const totalPage = Math.ceil(totalProducts/numberOfProductsPerPage)
        return (
            <PaginationBlock>
                <ArrowPagination 
                    disabled={currentPage===1?true:false} 
                    onClick = {gotoPrevPage}
                >{"<"}</ArrowPagination>
                <CurrentPage>{currentPage}</CurrentPage>
                <BySymbol>/</BySymbol>
                <TotalPage>{totalPage}</TotalPage>
                <ArrowPagination 
                    disabled={currentPage === numberOfProductsPerPage?true:false} 
                    onClick = {gotoNextPage}
                >{">"}</ArrowPagination>
            </PaginationBlock>
        );
    }
}

export {Pagination};