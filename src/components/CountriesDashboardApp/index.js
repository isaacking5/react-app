import React from 'react';
import './index.css';
import { withRouter } from 'react-router';
import Countries from './countryCard.js';
import SearchCountry from './SearchByCountry.js';
import SelectRegion from './SearchByRegion.js';
import DarkLightMode from './DarkLightMode.js';
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


function CountriesFilterBar(props) {
    return (
        <div className = "countries-filter-bar">
                <SearchCountry filterCountry = {props.filterByCountry} themeColor = {props.themeColor}/>
                <SelectRegion filterRegion = {props.filterByRegion}/>
            </div>
    );
}

export default withRouter(CountriesDashboardApp);
