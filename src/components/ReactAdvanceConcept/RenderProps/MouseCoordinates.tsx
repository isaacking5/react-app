import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

type MouseCoordinatesProps = {
    render:Function
}

@observer
class MouseCoordinates extends React.Component<MouseCoordinatesProps>{
    @observable coordinates;
    constructor(props){
        super(props)
        this.coordinates = {
            x:0,
            y:0,
        }
    }

    OnMouseMove = (event) =>{
        const {clientX: x, clientY: y} = event;
        this.coordinates = {x,y}
        // this.coordinates.x = event.clientX
        // this.coordinates.y = event.clientY
        // console.log(this.coordinates.x, this.coordinates.y)
    }
    render(){
        return(
            this.props.render(this.coordinates, this.OnMouseMove)
        )
    }
}

export default MouseCoordinates