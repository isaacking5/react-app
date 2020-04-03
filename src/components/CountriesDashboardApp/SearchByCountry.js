import React from 'react';

class SearchCountry extends React.Component {
    state = {
        selectedCountries: ""
    }
    handleOnChange = (event) => {
        this.setState({ selectedCountries: event.target.value });
    }
    handleOnSubmit = (event) => {
        this.props.filterCountry(this.state.selectedCountries);
        this.setState({ selectedCountries: "" });
        event.preventDefault();
    }

    render() {
        //  <FaSearch className="search-icon"/>
        return (
            <form onSubmit = {this.handleOnSubmit}>
            <div className="search-area">
            <input type="text" value = {this.state.selectedCountries} onChange= {this.handleOnChange} placeholder = "search country name.." className = {this.props.themeColor ? "search-bar dark-mode":"search-bar"}/>
            </div>
            </form>
        );
    }
}

export default SearchCountry;