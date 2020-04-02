import React from 'react';
import './index.css';
import { withRouter } from 'react-router';
import Countries from './countryCard.js';
import { MdBrightnessMedium } from "react-icons/md";
class CountriesDashboardApp extends React.Component {
    state = {
        countries: [],
        // selectedTheme: false,

    }

    orginalCountriesList = []
    regionCountriesList = []

    componentDidMount() {
        let countriesData = [];
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                json.forEach((eachCountry) => {
                    countriesData.push({
                        country: eachCountry.name,
                        population: eachCountry.population,
                        region: eachCountry.region,
                        capital: eachCountry.capital,
                        flag: eachCountry.flag
                    });
                });
                this.orginalCountriesList = countriesData;
                this.regionCountriesList = countriesData;
                setTimeout(() => {
                    this.setState({ countries: countriesData });
                }, 2000);

            });

    }


    getCountries = () => {}

    filterCountriesByRegion = (region) => {
        let filteredRegionList = [];
        if (region !== "all") {
            filteredRegionList = this.orginalCountriesList.filter((eachCountry) => {
                return (region === eachCountry.region);
            });
        }
        else {
            filteredRegionList = this.orginalCountriesList;
        }

        this.regionCountriesList = filteredRegionList;
        this.setState({ countries: filteredRegionList });

    }

    filterCountriesByCountry = (searchCountry) => {
        let pattern = new RegExp(searchCountry, "i");
        const filteredCountryList = this.regionCountriesList.filter((eachCountry) => {
            return (pattern.test(eachCountry.country));
        });
        this.setState({ countries: filteredCountryList });
    }

    onChangeTheme = (mode) => {
        this.props.onThemeChange(mode);
    }

    render() {
        return (
            <div className = {this.props.selectedTheme ? "country-dashboard-wrapper background-darkmode":"country-dashboard-wrapper"}>
                <div className = {this.props.selectedTheme ? "country-dashboard-header dark-mode":"country-dashboard-header"}>
                        <h3>Where in the World ?</h3>
                        <DarkLightMode changeTheme = {this.onChangeTheme} themeStatus = {this.props.selectedTheme}/>
                </div>
                <CountriesFilterBar filterByCountry = {this.filterCountriesByCountry} filterByRegion = {this.filterCountriesByRegion} themeColor = {this.props.selectedTheme}/>
                <div className="country-render-list">
                    <Countries countriesList = {this.state.countries} themeColor = {this.props.selectedTheme}/>
                </div>
            </div>
        );
    }
}

class DarkLightMode extends React.Component {

    toggleDarkLightModeChanger = this.props.themeStatus;
    handleTheme = () => {
        this.props.changeTheme(!(this.toggleDarkLightModeChanger));
        this.toggleDarkLightModeChanger = !this.toggleDarkLightModeChanger;
    }
    render() {
        return (
            <div className="darklight-icon-block" onClick = {this.handleTheme}>
                <span>{<MdBrightnessMedium className = "light-dark-mode-icon"/>}</span>
                <div>
                    <span className="icon-text">{this.toggleDarkLightModeChanger?"Light Mode":"Dark Mode"}</span>
                </div>
            </div>
        );
    }
}

class CountriesFilterBar extends React.Component {
    render() {
        return (
            <div className = "countries-filter-bar">
                <SearchCountry filterCountry = {this.props.filterByCountry} themeColor = {this.props.themeColor}/>
                <SelectRegion filterRegion = {this.props.filterByRegion}/>
            </div>
        );
    }
}

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
//fa fa-spinner fa-spin
export default withRouter(CountriesDashboardApp);
export { DarkLightMode };



// ReactDOM.render(<CountriesDashboardApp />, document.getElementById("root"));
