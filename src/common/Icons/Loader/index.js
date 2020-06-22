import React, { Component } from "react";
import SvgComponent from "../../SvgComponent";
import SvgFile from "../../../../../tap-mini-project/src/ContentManagementPortal/components/Icons/Loader/SvgFile";

class Loader extends Component {
  render() {
    return <SvgComponent renderComponent={SvgFile} {...this.props} />;
  }
}

export default Loader;
