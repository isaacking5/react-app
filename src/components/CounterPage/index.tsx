import React, { Component } from 'react'
import { observer} from 'mobx-react'

import CounterStore from '../../stores/CounterStore/index'

// import counterStore from '../../stores'
// const counterStore = stores.counterStore
import {CounterContainer, CounterInputTag, MainHeding, Button} from './styledComponents'

@observer
class CounterPage extends Component {
  functionCalling

  handleIncrement = () => {
    CounterStore.incrementCounter()
  }



  handleDecrement = () => {
    if (CounterStore.count !== 0) {
      CounterStore.decrementCounter()
    }
  }
  handleOnChange = (event) =>{
    CounterStore.setCount(Number(event.target.value))
  }

  render() {
    return (
      <CounterContainer>
        <MainHeding>Counter</MainHeding>
          <div>
            <Button onClick={this.handleIncrement}>+</Button>
            <CounterInputTag type="number" value={CounterStore.count} onChange = {this.handleOnChange}/>
            <Button onClick={this.handleDecrement}>-</Button>
          </div>
      </CounterContainer>
    )
  }
}

export default CounterPage
