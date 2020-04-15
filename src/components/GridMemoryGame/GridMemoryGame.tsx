import React from 'react'
import {observer } from "mobx-react"

import gridGameStore from '../../stores/GridGameStore'

import GridHeader from './GridHeader'
import GridGameField from './GridGameField'
import {GridBlock} from './styledComponents'

@observer   
class GridMemoryGame extends React.Component{
    render(){
        return(
            <div className = "bg-gray-800 h-screen flex items-center justify-center flex-col">
                <GridBlock >
                    <GridHeader />
                    <GridGameField gridStore = {gridGameStore.currentLevelGridCells}/>
                </GridBlock>
            </div>
        )
    }
}

export default GridMemoryGame