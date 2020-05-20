import React from 'react'

type DisplayMouseCoordinatesPorps = {
    coordinates : any
    onMouseMove : any
}
class DisplayMouseCoordinates extends React.Component<DisplayMouseCoordinatesPorps>{
    render(){
        const {coordinates, onMouseMove} = this.props
        return (
            <div className="bg-gray-300 p-2" onMouseMove = {onMouseMove}>
                <p className="font-bold text-center p-2">DisplayMouseCoordinates</p>
                <p className = "font-semibold text-center text-xs">The mouse position is ({coordinates.x}, {coordinates.y})</p>
            </div>
        )
    }
}

export default DisplayMouseCoordinates