import React from 'react'
import './index.css';
import { withRouter } from 'react-router';
class Countries extends React.Component {

    navigateToNext = (country) => {
        const { history } = this.props;
        history.push({ pathname: `/countriesDashboardApp/:${country}`, state: { country, } });
        console.log(history);
    }
    render() {
        if (this.props.countriesList.length > 0) {
            const { countriesList } = this.props;
            const { themeColor } = this.props;
            const countriesRenderList = countriesList.map((eachCountry) => {
                return (<li className={themeColor?"country-list dark-mode":"country-list"} onClick = {()=>this.navigateToNext(eachCountry.country)}>
                    <div className="image-block"><img src={eachCountry.flag} className="countries-flag" alt="CountriesFlag"/></div>
                    <div className="countries-data">
                        <span className="country-name">{eachCountry.country}</span>
                        <span>Population: {eachCountry.population}</span>
                        <span>Region: {eachCountry.region}</span>
                        <span>Capital: {eachCountry.capital}</span>
                    </div>
                </li>);
            });
            return (
                <ul className="country-ul-tag">{ countriesRenderList }</ul>
            );
        }
        else
            return (
                <div className = "loading-block">
                    <i className="fa fa-gear fa-spin" style={{fontSize:"50px", marginBottom:"20px"}}></i>
                </div>
            );
    }
}

export default withRouter(Countries);
