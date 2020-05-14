import React from 'react'
import {DropDown, FilterOption, Select, Lable} from '../../styledComponents'

type ProductSortProps = {
    onChangeSortBy : Function
}
class ProductSort extends React.Component<ProductSortProps>{
    handleOnchange = (event) =>{
        const {onChangeSortBy} = this.props
        let value
        if(event.target.value === "Lowest to Highest")
            value = "Accending"
        else
            value = "Descending"
        onChangeSortBy(value)
    }
    render (){
        return(
            <Select>
                <Lable>Sort price by:</Lable>
                    <DropDown onChange={this.handleOnchange}>
                        <FilterOption hidden={true}>Select</FilterOption>
                        <FilterOption>Lowest to Highest</FilterOption>
                        <FilterOption>Highest to Lowest</FilterOption>
                    </DropDown>
            </Select>
        )
    }
}

export default ProductSort