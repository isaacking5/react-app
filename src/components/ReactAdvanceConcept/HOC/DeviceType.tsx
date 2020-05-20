import React from 'react'
import withScreenSizeDetectors from './withScreenSizeDetectors'

type DeviceTypeProps = {
    type : String
}
class DeviceType extends React.Component<DeviceTypeProps>{
    render(){
        const {type} = this.props
        return(
            <div className="bg-gray-300 p-2">
                <p className="font-bold text-center p-2">DeviceTypeText</p>
                <p className = "font-semibold text-center text-xs">Device Type: {type}</p>
            </div>
        )
    }
}

export default withScreenSizeDetectors(DeviceType)