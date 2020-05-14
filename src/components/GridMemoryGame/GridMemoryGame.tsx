import React from 'react'
import {observer } from "mobx-react"
import {toJS} from 'mobx'

import gridGameStore from '../../stores/GridGameStore'
import gridThemeColor from '../../stores/ThemesStore/GridGameTheme'

import GridHeader from './GridHeader'
import GridGameField from './GridGameField'
import GameResult from './GameResult'
import {GridBlock, GamePage} from './styledComponents'

@observer   
class GridMemoryGame extends React.Component{

    render(){
        // console.log(toJS(gridGameStore.currentDisplayGrids))
        return(
            <GamePage className = "transition-all duration-500" backGroundColor = {gridThemeColor.selectedTheme}>
                <GridBlock LevelOfGame = {gridGameStore.level}>
                    <GridHeader 
                        level = {gridGameStore.level}
                        topLevel = {gridGameStore.topLevel}
                        onChangeSelectedTheme = {gridThemeColor.onChangeSelectedTheme}
                        selectedTheme = {gridThemeColor.selectedTheme}
                    />
                    { gridGameStore.level === 2 ?
                    <GameResult 
                        level = {gridGameStore.level}
                        playAgain = {gridGameStore.onPlayAgainClick}
                        selectedTheme = {gridThemeColor.selectedTheme}
                    />:
                    <GridGameField
                        key = {gridGameStore.ramdomKey}
                        currentGridCells = {gridGameStore.currentLevelGridCells} 
                        currentDisplayGrids = {gridGameStore.currentDisplayGrids}
                        resetGridField = {gridGameStore.resetGame}
                        level = {gridGameStore.level}
                    />
                    }
                    
                </GridBlock>
            </GamePage>
        )
    }
}

export default GridMemoryGame