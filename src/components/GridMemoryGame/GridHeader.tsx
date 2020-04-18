import React from 'react'
import { observer } from "mobx-react"
import {TopLevelBlock, Level, Button} from './styledComponents'

type GridHeaderProps = {
    level : number
    topLevel : number
    onChangeSelectedTheme : any
    selectedTheme : string
}

@observer
class GridHeader extends React.Component<GridHeaderProps>{
    
    render(){
        const {level, topLevel, onChangeSelectedTheme, selectedTheme} = this.props
        return(
            <div>
                <div className="text-center mb-6">
                    <TopLevelBlock className="text-2xl font-bold transition-all duration-700" backGroundColor = {selectedTheme}>Top Level : {topLevel}</TopLevelBlock>
                </div>
                <div className="flex justify-between m-8">
                    <Level className="text-xl font-semibold text-gray-400 transition-all duration-700" backGroundColor = {selectedTheme}>Level : {level}</Level>
                    <Button className = "transition-all duration-700" onClick = {onChangeSelectedTheme} backGroundColor = {selectedTheme}>Mode : {selectedTheme==="dark"?"Light":"Dark"}</Button>
                </div>

            </div>
        )
   
    }
}

export default GridHeader