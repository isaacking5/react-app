import React from 'react'
import { observer } from 'mobx-react'

import {RetryButton} from './styledComponent.js'

@observer
class FailureView extends React.Component {
  render() {
    const { onRetryClick} = this.props

    return (
        <RetryButton onClick={onRetryClick}>Retry</RetryButton>
    )
  }
}

export default FailureView
