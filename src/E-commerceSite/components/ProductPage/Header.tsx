import React from 'react'

import {ListOfItemsCount,HeaderBlock } from '../../styledComponents'
import ProductSort from './ProductSort';
import { observer } from "mobx-react";

type HeaderProps = {
    productsCount : number
    onChangeSortBy : Function
}
@observer
class Header extends React.Component<HeaderProps>{
    render (){
        const {productsCount, onChangeSortBy} = this.props
        return (
            <HeaderBlock>
                <ListOfItemsCount>{productsCount} Product(s) found.</ListOfItemsCount>
                <ProductSort onChangeSortBy = {onChangeSortBy}/>
            </HeaderBlock>
        )
    }
}

export default Header