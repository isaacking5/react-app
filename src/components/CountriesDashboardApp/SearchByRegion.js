import React from 'react';
class SelectRegion extends React.Component {

    state = {
        selectedRegion: "",
    }
    handleOnChange = (event) => {
        this.props.filterRegion(event.target.value);

    }
    render() {
        return (
            <select id="select" className="region-dropDown" onChange = {this.handleOnChange}> 
                    <option value="all">All Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
        );
    }
}

export default SelectRegion;
