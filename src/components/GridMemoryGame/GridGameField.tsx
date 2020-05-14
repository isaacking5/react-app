import React from 'react'
import GridCell from "./GridCell"
import GridCellModel from '../../stores/GridGameModel'
import gridThemeColor from '../../stores/ThemesStore/GridGameTheme'
import {GridGameFieldBlock} from './styledComponents'
import { observer } from "mobx-react"
import { observable } from "mobx"
type GridGameFieldProps = {
    currentGridCells : Array<GridCellModel>
    currentDisplayGrids : Array<number>
    resetGridField: Function
    level:number
}

@observer
class GridGameField extends React.Component<GridGameFieldProps>{
    @observable timerId : any
    @observable pointerEvent:any =  true
    componentDidMount = ()=>{
        const {resetGridField, level} = this.props
        this.timerId =  setTimeout(()=>{
            resetGridField()
          }, (level+3)*3000)

          setTimeout(()=>this.pointerEvent=false, level+3000)
    }

    componentWillUnmount = () =>{
        clearTimeout(this.timerId)
    }
    render(){
        const {currentGridCells, currentDisplayGrids, level} = this.props
        console.log(level)
        return(
                <GridGameFieldBlock className="flex flex-wrap justify-center" pointerEvent = {this.pointerEvent}>
                    {
                            currentGridCells.map(eachCell => (
                            <GridCell
                            key = {eachCell.id}
                            gridIndex={currentGridCells.indexOf(eachCell)}
                            cellData={eachCell}
                            displayGrids = {currentDisplayGrids}
                            cellColor = {gridThemeColor.selectedTheme}
                        />))
                }
            </GridGameFieldBlock>
        )
    }
}

export default GridGameField