import React from 'react';
import { withRouter } from 'react-router';
import './index.css';
import { TiArrowBack } from "react-icons/ti";
import { DarkLightMode } from "./index.js";
class SpecifiedCountry extends React.Component {
    state = {
        specifiedCountry: []
    }
    navigateToBack = () => {
        this.props.history.goBack();
    }

    originalData = []

    componentDidMount = () => {
        let selectedCountry = this.props.location.state.country;
        console.log(selectedCountry);
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                let countriesData = [];
                json.forEach((eachCountry) => {
                    if (eachCountry.name === selectedCountry) {
                        const languages = eachCountry.languages.map((eachEl) => {
                            return eachEl.name;
                        });
                        countriesData.push({
                            country: eachCountry.name,
                            population: eachCountry.population,
                            region: eachCountry.region,
                            capital: eachCountry.capital,
                            flag: eachCountry.flag,
                            nativeName: eachCountry.nativeName,
                            topLevelDomain: eachCountry.topLevelDomain[0],
                            currencies: eachCountry.currencies[0].name,
                            languages: languages,
                            subregion: eachCountry.subregion,
                            borders: eachCountry.borders
                        });
                    }
                });
                setTimeout(() => {
                    this.originalData = json;
                    this.setState({ specifiedCountry: countriesData });
                }, 2000);

            });
    }

    HandleBordersCountries = (borderValue) => {
        console.log(borderValue);
        // console.log(this.originalData);
        let countriesData = [];
        this.originalData.forEach((eachCountry) => {
            if (eachCountry.alpha3Code === borderValue) {
                // console.log(eachCountry.alpha3Code);
                const languages = eachCountry.languages.map((eachEl) => {
                    return eachEl.name;
                });
                countriesData.push({
                    country: eachCountry.name,
                    population: eachCountry.population,
                    region: eachCountry.region,
                    capital: eachCountry.capital,
                    flag: eachCountry.flag,
                    nativeName: eachCountry.nativeName,
                    topLevelDomain: eachCountry.topLevelDomain[0],
                    currencies: eachCountry.currencies[0].name,
                    languages: languages,
                    subregion: eachCountry.subregion,
                    borders: eachCountry.borders
                });
            }
        });
        this.setState({ specifiedCountry: countriesData });
    }

    onChangeTheme = (mode) => {
        this.props.onThemeChange(mode);
    }
    render() {
        if (this.state.specifiedCountry.length > 0) {
            let eachCountry = this.state.specifiedCountry;
            return (
                <div className = {this.props.selectedTheme ? "country-dashboard-wrapper background-darkmode":"country-dashboard-wrapper"}>
                <div className = {this.props.selectedTheme ? "country-dashboard-header dark-mode":"country-dashboard-header"}>
                        <h3>Where in the World ?</h3>
                        <DarkLightMode changeTheme = {this.onChangeTheme} themeStatus = {this.props.selectedTheme}/>
                </div>
                <button className={this.props.selectedTheme ? "border-buttons go-back dark-mode":"border-buttons go-back"} onClick= {this.navigateToBack}><TiArrowBack/> back</button>
                <div className = "each-country-data">
                <div><img src={eachCountry[0].flag} className="eachCountry-country-flag" alt="CountriesFlag"/></div>
                    <div className="countryCard-text-block">
                    <div className="countryCard-inner-data">
                        <div className="country-card-data-left">
                            <span className="selected-country-name">{eachCountry[0].country}</span>
                            <span className="inner-country-data"><b>Population:</b>  {eachCountry[0].population}</span>
                            <span className="inner-country-data"><b>Region:</b>  {eachCountry[0].region}</span>
                            <span className="inner-country-data"><b>Capital:</b>  {eachCountry[0].capital}</span>
                            <span className="inner-country-data"><b>Native Name:</b>  {eachCountry[0].nativeName}</span>
                            <span className="inner-country-data"><b>Sub-region:</b>  {eachCountry[0].subregion}</span>
                        </div>
                        <div className="country-card-data-right">
                            <span className="inner-country-data"><b>Top Level Domain:</b>  {eachCountry[0].topLevelDomain}</span>
                            <span className="inner-country-data"><b>Currencies:</b>  {eachCountry[0].currencies}</span>
                            <span className="inner-country-data"><b>Languages:</b>  {(eachCountry[0].languages).join(', ')}</span>
                        </div>
                    </div>
                    <div className="country-card-data-left">
                        <span><b>Borders Countries:</b></span>
                        <div>
                            <ul className="ul-tag-bordersCountries"><BorderCountries borders = {eachCountry[0].borders} handleBorders = {this.HandleBordersCountries} changeTheme={this.props.selectedTheme}/></ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
        }
        else {
            return (
                <div className = "loading-block">
                    <i className="fa fa-gear fa-spin" style={{fontSize:"50px", marginBottom:"20px"}}></i>
                </div>
            );
        }
    }
}


class BorderCountries extends React.Component {
    handleOnclick = (borderValue) => {
        this.props.handleBorders(borderValue);
    }
    render() {
        const bordersCountries = this.props.borders.map((eachBorder) => {
            return (<li className="li-tag-bordersCountries"><button className={this.props.changeTheme ? "border-buttons dark-mode" : "border-buttons"} onClick={()=>this.handleOnclick(eachBorder)}>{eachBorder}</button></li>);
        });

        return bordersCountries;
    }
}
export default withRouter(SpecifiedCountry);







//version-1

// import React from 'react';
// import { withRouter } from 'react-router';
// import './index.css';

// class SpecifiedCountry extends React.Component {
//     state = {
//         specifiedCountry: []
//     }
//     navigateToBack = () => {
//         this.props.history.goBack();
//     }

//     originalData = []

//     componentDidMount = () => {
//         let selectedCountry = this.props.location.state.country;
//         console.log(selectedCountry);
//         fetch("https://restcountries.eu/rest/v2/all")
//             .then(response => response.json())
//             .then(json => {
//                 // console.log(json);
//                 let countriesData = [];
//                 json.forEach((eachCountry) => {
//                     if (eachCountry.name === selectedCountry) {
//                         const languages = eachCountry.languages.map((eachEl) => {
//                             return eachEl.name;
//                         });
//                         countriesData.push({
//                             country: eachCountry.name,
//                             population: eachCountry.population,
//                             region: eachCountry.region,
//                             capital: eachCountry.capital,
//                             flag: eachCountry.flag,
//                             nativeName: eachCountry.nativeName,
//                             topLevelDomain: eachCountry.topLevelDomain[0],
//                             currencies: eachCountry.currencies[0].name,
//                             languages: languages,
//                             subregion: eachCountry.subregion,
//                             borders: eachCountry.borders
//                         });
//                     }
//                 });
//                 setTimeout(() => {
//                     this.originalData = json;
//                     this.setState({ specifiedCountry: countriesData });
//                     // console.log(this.originalData);
//                 }, 2000);

//             });
//     }

//     HandleBordersCountries = (borderValue) => {
//         console.log(borderValue);
//         // console.log(this.originalData);
//         let countriesData = [];
//         this.originalData.forEach((eachCountry) => {
//             if (eachCountry.alpha3Code === borderValue) {
//                 // console.log(eachCountry.alpha3Code);
//                 const languages = eachCountry.languages.map((eachEl) => {
//                     return eachEl.name;
//                 });
//                 countriesData.push({
//                     country: eachCountry.name,
//                     population: eachCountry.population,
//                     region: eachCountry.region,
//                     capital: eachCountry.capital,
//                     flag: eachCountry.flag,
//                     nativeName: eachCountry.nativeName,
//                     topLevelDomain: eachCountry.topLevelDomain[0],
//                     currencies: eachCountry.currencies[0].name,
//                     languages: languages,
//                     subregion: eachCountry.subregion,
//                     borders: eachCountry.borders
//                 });
//             }
//         });
//         this.setState({ specifiedCountry: countriesData });
//     }
//     render() {
//         // console.log(this.props.location.state.country);
//         if (this.state.specifiedCountry.length > 0) {
//             let eachCountry = this.state.specifiedCountry;
//             return (
//                 <div>
//                 <button className="border-buttons" onClick= {this.navigateToBack}>go back</button>
//                 <div className = "each-country-data">
//                 <div><img src={eachCountry[0].flag} className="eachCountry-country-flag" alt="CountriesFlag"/></div>
//                     <div className="countryCard-text-block">
//                     <div className="countryCard-inner-data">
//                         <div className="country-card-data-left">
//                             <span className="selected-country-name">{eachCountry[0].country}</span>
//                             <span className="inner-country-data"><b>Population:</b>  {eachCountry[0].population}</span>
//                             <span className="inner-country-data"><b>Region:</b>  {eachCountry[0].region}</span>
//                             <span className="inner-country-data"><b>Capital:</b>  {eachCountry[0].capital}</span>
//                             <span className="inner-country-data"><b>Native Name:</b>  {eachCountry[0].nativeName}</span>
//                             <span className="inner-country-data"><b>Sub-region:</b>  {eachCountry[0].subregion}</span>
//                         </div>
//                         <div className="country-card-data-right">
//                             <span className="inner-country-data"><b>Top Level Domain:</b>  {eachCountry[0].topLevelDomain}</span>
//                             <span className="inner-country-data"><b>Currencies:</b>  {eachCountry[0].currencies}</span>
//                             <span className="inner-country-data"><b>Languages:</b>  {(eachCountry[0].languages).join(', ')}</span>
//                         </div>
//                     </div>
//                     <div className="country-card-data-left">
//                         <span><b>Borders Countries:</b></span>
//                         <div>
//                             <ul className="ul-tag-bordersCountries"><BorderCountries borders = {eachCountry[0].borders} handleBorders = {this.HandleBordersCountries}/></ul>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             );
//         }
//         else {
//             return (
//                 <div className = "loading-block">
//                     <i className="fa fa-gear fa-spin" style={{fontSize:"50px", marginBottom:"20px"}}></i>
//                 </div>
//             );
//         }
//     }
// }


// class BorderCountries extends React.Component {
//     handleOnclick = (borderValue) => {
//         this.props.handleBorders(borderValue);
//     }
//     render() {
//         const bordersCountries = this.props.borders.map((eachBorder) => {
//             return (<li className="li-tag-bordersCountries"><button className="border-buttons" onClick={()=>this.handleOnclick(eachBorder)}>{eachBorder}</button></li>);
//         });

//         return bordersCountries;
//         // return (<p>{this.props.borders.join(', ')}</p>);
//     }
// }
// //<span className="inner-country-data">Borders: {(eachCountry[0].borders).join(', ')}</span>
// export default withRouter(SpecifiedCountry);
