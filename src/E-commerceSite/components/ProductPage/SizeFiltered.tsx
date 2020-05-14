import React from 'react'
import  { SizeSelectedBlock, Sizes, SelectSize, SizeFixedBlock} from '../../styledComponents'
import { observable } from "mobx"
import { observer } from "mobx-react"

import SizeButton from './SizeButton'

type SizeFilterProps = {
    onSelectSize : Function
}
@observer
class SizeFilter extends React.Component<SizeFilterProps>{
    @observable sizesOfArray 
    constructor (props){
        super(props)
        this.sizesOfArray = ['XS', 'S' , 'M', 'L', 'XL', 'XXL']
    }
    onSelectSize = (size) =>{
        this.props.onSelectSize(size)
    }

    render(){
        const listOfButtons = this.sizesOfArray.map((eachSize)=>{
            return <SizeButton key ={Math.random().toString()} onClick = {this.onSelectSize} size = {eachSize}/>
        })
      return (
        <SizeSelectedBlock>
            <SizeFixedBlock>
                <Sizes>Sizes:</Sizes>
                <SelectSize>
                    {listOfButtons}
                </SelectSize>
            </SizeFixedBlock>
        </SizeSelectedBlock>
      )
    }
}

export default SizeFilter
