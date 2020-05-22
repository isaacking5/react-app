import React from "react";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
  render() {
    const {color} = this.props
    return (
      <LoadingViewContainer>
        <Loader color = {color}/>
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;
