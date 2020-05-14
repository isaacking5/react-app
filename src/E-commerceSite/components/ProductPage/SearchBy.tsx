import React from 'react'
import { FaSearch } from "react-icons/fa";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {SearchBlock, SearchField, SearchIcon } from '../../styledComponents'


type SearchByProps = {
    searchedItems : any
}

@observer
class SearchBy extends React.Component<SearchByProps>{
    @observable inputValue = ""
    onChangeHandle = (event) =>{
        this.inputValue = event.target.value
    }

    handleOnsubmit = (event) =>{
        const {searchedItems} = this.props
       searchedItems(this.inputValue)
       event.preventDefault()
       this.inputValue=""
    }
    render(){
        return (
            <SearchBlock onSubmit={this.handleOnsubmit}>
                <SearchField type='text' value={this.inputValue} onChange = {this.onChangeHandle} placeholder="Search by product name" />
                <SearchIcon >
                    <FaSearch onClick={this.handleOnsubmit} className="text-3xl m-2"/>
                </SearchIcon>
            </SearchBlock>
        )
    }
}

export default SearchBy