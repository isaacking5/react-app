import React, { Component } from 'react';
import {PaginationBlock, ArrowPagination, CurrentPage, BySymbol, TotalPage} from './styledComponent'
class Pagination extends Component {
    render() {

        return (
            <PaginationBlock>
                <ArrowPagination>{"<"}</ArrowPagination>
                <CurrentPage>1</CurrentPage>
                <BySymbol>/</BySymbol>
                <TotalPage>6</TotalPage>
                <ArrowPagination>></ArrowPagination>
            </PaginationBlock>
        );
    }
}

export {Pagination};