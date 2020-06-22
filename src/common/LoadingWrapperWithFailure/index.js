import React from 'react'
import { observer } from 'mobx-react'

import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { getUserDisplayableErrorMessage } from '../../utils/APIUtils'

import LoadingView from './LoadingView'
import FailureView from './FailureView'

@observer
class LoadingWrapperWithFailure extends React.Component {
  render() {
    console.log("wrapper")
    const {
      apiStatus,
      renderSuccessUI: RenderSuccessUI,
      onRetryClick,
      apiError,
    } = this.props
    const errorMessage = getUserDisplayableErrorMessage(apiError)

    switch (apiStatus) {
      case API_FETCHING:
        console.log("loding..")
        return <LoadingView />
      case API_SUCCESS:
        console.log("sucess")
        return <RenderSuccessUI />
      case API_FAILED:
        return (
          <FailureView
            onRetryClick={onRetryClick}
            errorMessage={errorMessage}
          />
        )
      default:
        return null
    }
  }
}

export default LoadingWrapperWithFailure
