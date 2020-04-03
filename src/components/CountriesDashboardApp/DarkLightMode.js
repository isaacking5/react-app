import React from 'react';
import { MdBrightnessMedium } from "react-icons/md";
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

export default DarkLightMode;
