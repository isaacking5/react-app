import React from "react";
import Loader from 'react-loader-spinner'


class LoadingView extends React.Component {
  render() {
    return (
        <Loader className="flex justify-center" type="Oval" color="#00BFFF" height={20} width={20}/>
    );
  }
}

export default LoadingView;
