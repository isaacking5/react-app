import React from 'react'
import { observable } from "mobx"
import {Cell, ClickedCell} from './styledComponents'
import { observer } from "mobx-react"
import gridGameStore from '../../stores/GridGameStore'
import GridCellModel from '../../stores/GridGameModel'

type GridCellProps = {
    key:string  
    gridIndex:number
    cellData: GridCellModel
    displayGrids : Array<number>
    cellColor : string
}

@observer
class GridCell extends React.Component<GridCellProps>{
    @observable gridCellColor : string
    @observable isClickedOnCell : boolean
    constructor (props){
        super(props)
        this.gridCellColor = "#2a4365"
        this.isClickedOnCell = false
    }

    onCellClick = (clickedGridIndex)=>{
      const {cellData, cellColor} = this.props
      cellData.isHidden = true
      this.isClickedOnCell = gridGameStore.onCellClick(clickedGridIndex)
      const gridColor = cellColor === 'dark'?"#81e6d9":"#2f855a"
      const ColorBg = this.isClickedOnCell ? gridColor : "red"
      this.gridCellColor = ColorBg
    }



    componentDidMount = () =>{
      const {displayGrids, gridIndex, cellColor} = this.props
      const gridColor = cellColor === 'dark'?"#81e6d9":"#2f855a"
      displayGrids.forEach((eachEl) =>{
        if(eachEl === gridIndex)
          this.gridCellColor = gridColor

        setTimeout(()=>this.gridCellColor = "#2a4365", gridGameStore.level+3000)
      })
    }
    render(){
      const {gridIndex} = this.props
        return (
          <Cell
            className="origin-center transition-all duration-700"
            onClick = {()=>this.onCellClick(gridIndex)}
            colorBG = {this.gridCellColor}
            LevelOfGame = {gridGameStore.level}
          ><ClickedCell IsClickedCell = {this.isClickedOnCell}></ClickedCell></Cell>
        )
    }
}


export default GridCell