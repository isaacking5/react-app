import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
 import {CounterContainer, CounterInputTag, MainHeding, Button} from './styledComponents'
 import CounterStore from '../../stores/CounterStore/index.js'
// import counterStore from '../../stores'
// const counterStore = stores.counterStore

type Props = {
  initialCount: number
}

@observer
class CounterPage extends Component<Props> {
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
