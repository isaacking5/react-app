import React from 'react'
import {SizeOptions} from '../../styledComponents'
import { observable } from "mobx"
import { observer } from "mobx-react"

type SizeButtonProps = {
    onClick:Function
    size:string
}

@observer
class SizeButton extends React.Component<SizeButtonProps>{
    @observable isClicked = false

    onClickSizeButton = () =>{
        const {size, onClick} = this.props
        this.isClicked = !this.isClicked
        onClick(size)
    }
    render (){
        const {size} = this.props;
        return (
            <SizeOptions bgColor = {this.isClicked} onClick={this.onClickSizeButton}>{size}</SizeOptions>
        )
    }
}

export default SizeButton