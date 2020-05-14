import React from 'react'
import { observer } from 'mobx-react'

import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import LoadingView from './LoadingView'
import FailureView from './FailureView'

@observer
class ButtonWithLoader extends React.Component {
  render() {
    const {
      apiStatus,
      onRetryClick,
    } = this.props

    switch (apiStatus) {
      case API_FETCHING:
        return <LoadingView />
      case API_FAILED:
        return (
          <FailureView
            onRetryClick={onRetryClick}
          />
        )
      default:
        return null
    }
  }
}

export default ButtonWithLoader
