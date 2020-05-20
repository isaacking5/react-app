import React from 'react'
import withToggle from './withToggle'

type CollapseExpandProps =  {
    isToggleStatus : boolean
    onToggle : any
}
class CollapseExpand extends React.Component<CollapseExpandProps>{
    List = ["Egg", "Bread"]

    listOfItems = () =>{
        console.log("hai")
        const list = this.List.map((eachItem)=>{
            return <li key={eachItem}>{eachItem}</li>
        })
        return <ul>{list}</ul>
    }
    render(){
        const {isToggleStatus, onToggle} = this.props
        return (
            <div className="bg-gray-500 p-2">
                <p className="font-bold text-center p-2">CollapseExpand</p>
                <div className="justify-center flex">
                    <label>Sample Shopping List:</label>
                    <div>
                        <button className="bg-blue-600 p-1 pr-4 pl-4 ml-2 rounded" onClick = {onToggle}>{isToggleStatus?"Collapse":"Expand"}</button>
                        {isToggleStatus?
                            <div className="m-2">{this.listOfItems()}</div>:
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withToggle(CollapseExpand)