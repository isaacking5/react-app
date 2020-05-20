import React from 'react'
import ViewEditToggle from './HOC/ViewEditToggle'
import CollapseExpand from './HOC/CollapseExpand'
import DeviceType from './HOC/DeviceType'
import DisplayMouseCoordinates from './RenderProps/DisplayMouseCoordinates'
import MouseCoordinates from "./RenderProps/MouseCoordinates"

class ReactAdvanceConcepts extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-2xl font-bold p-2 pt-4 text-center">HOC's Usage</h1>
                <ViewEditToggle />
                <CollapseExpand />
                <DeviceType />
                <h1 className="text-2xl font-bold p-2 pt-4 text-center">Render Props Usage</h1>
                <MouseCoordinates render={(coordinates, OnMouseMove)=>{
                    return <DisplayMouseCoordinates coordinates={coordinates} onMouseMove = {OnMouseMove}/>
                }}/>
            </div>
        )
    }
}

export default ReactAdvanceConcepts