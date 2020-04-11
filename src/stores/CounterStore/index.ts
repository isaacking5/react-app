import { observable, action } from 'mobx'
import { act } from 'react-dom/test-utils';

class CounterStoreApp { 
   @observable count =  0

   @action.bound
   incrementCounter() {
      this.count = this.count + 1
   } 

   @action.bound
   decrementCounter() {
      this.count = this.count - 1
   }

   @action.bound
   setCount(userValue){
      this.count = userValue;
   }
}

const CounterStore = new CounterStoreApp
export default CounterStore
