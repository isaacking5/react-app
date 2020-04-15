import React from 'react'

class GridHeader extends React.Component{
    render(){
        return(
            <div>
                <div className="text-center mb-12">
                    <p>Top Level:0</p>
                </div>
                <div className="flex justify-between mb-6">
                    <p>Level : 0</p>
                    <button className = "border border-gray-200 p-2">Mode : Light</button>
                </div>

            </div>
        )
   
    }
}

export default GridHeader