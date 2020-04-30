import React from 'react'
import { FaSearch } from "react-icons/fa";
import {SearchBlock, SearchField, SearchIcon } from '../../styledComponents'
class SearchBy extends React.Component{
    render(){
        return (
            <SearchBlock>
                <SearchField type='text' placeholder="Search by product name" />
                <SearchIcon >
                    <FaSearch className="text-3xl m-2"/>
                </SearchIcon>
            </SearchBlock>
        )
    }
}

export default SearchBy