import React from 'react'
// import GridCell from './GridCell'
// import {Cell} from './styledComponents'
import GridCell from "./GridCell"
class GridGameField extends React.Component{
    render(){

        return(
            <GridCell gridSize = {gridSize}/>
        )
    }
}

export default GridGameField


{/* <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell> */}