import React from 'react'
import { observable } from "mobx"
import {Cell} from './styledComponents'

type GridCellProps = {
    gridSize : number
}

class GridCell extends React.Component<GridCellProps>{
    @observable shouldShowHiddenCells : boolean
    @observable isClickedOnCell : boolean
    constructor (props){
        super(props)
        this.shouldShowHiddenCells = false
        this.isClickedOnCell = false
    }

    onCellClick = ()=>{

    }

    componentDidMount = () =>{

    }
    render(){
        return (
            
        )
    }
}

function EachGrid(){
            <div className="bg-gray-200 border border-red-600 flex flex-wrap justify-center">
                <Cell style={{width:'100px', height:'100px', backgroundColor:'green', margin:'5px'}}></Cell>
            </div>
}
export default GridCell




/*

import { observable, action, runInAction } from "mobx";

import levels from "../../config/level";
import generateGameField from "../../utils/GridGameUtils";

import CellModel from "../models/Cell";

export default class GameStore {
  @observable level = 0;
  @observable topLevel = 0;
  selectedCellsCount = 0;
  @observable currentLevelGridCells = [];
  @observable isGameCompleted = false;

  @action.bound
  onCellClick(isWrongCell) {
    if (isWrongCell) {
      this.gotoInitialLevelAndUpdateCells();
    } else {
      this.incrementSelectedCellCount();
      if (this.selectedCellsCount === levels[this.level].memoryCount) {
        if (levels.length === this.level + 1) {
          setTimeout(() => {
            this.isGameCompleted = true;
          }, 200);
        } else {
          this.gotoNextLevelAndUpdateCells();
        }
      }
    }
  }

  @action.bound
  incrementSelectedCellCount() {
    this.selectedCellsCount = this.selectedCellsCount + 1;
  }

  @action.bound
  resetSelectedCellsCount() {
    this.selectedCellsCount = 0;
  }

  @action.bound
  gotoNextLevelAndUpdateCells() {
    setTimeout(() => {
      runInAction(() => {
        this.level = this.level + 1;
        this.setGridCells();
        this.resetSelectedCellsCount();
      });
    }, 200);
  }

  @action.bound
  gotoInitialLevelAndUpdateCells() {
    setTimeout(() => {
      runInAction(() => {
        this.resetGame();
      });
    }, 200);
  }

  @action.bound
  resetGame() {
    if (this.level > this.topLevel) {
      this.topLevel = this.level;
    }
    this.level = 0;
    this.setGridCells();
    this.resetSelectedCellsCount();
  }

  @action.bound
  playAgain() {
    this.isGameCompleted = false;
    this.resetGame();
  }

  @action.bound
  setGridCells() {
    const levelConfig = levels[this.level];
    let { field } = generateGameField(
      levelConfig.cellCount,
      levelConfig.memoryCount
    );
    const cells = field.map(field => {
      if (field === 1) {
        return new CellModel(false);
      }
      return new CellModel(true);
    });
    this.currentLevelGridCells = cells;
  }
}


*/



/*

import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import levels from "../../config/level";

import "./index.css";
@observer
class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  @observable shouldShowHiddenCells = true;
  @observable isClickedOnCell = false;

  componentDidMount() {
    const { level } = this.props;
    setTimeout(() => (this.shouldShowHiddenCells = false), 3000 + level * 1000);
  }

  onCellClick = e => {
    const { cellData, onCellClick } = this.props;
    this.isClickedOnCell = true;

    if (cellData.isHidden) {
      onCellClick(false);
    } else {
      onCellClick(true);
    }
  };

  render() {
    const { cellData, theme, level } = this.props;
    const { shouldShowHiddenCells, isClickedOnCell } = this;

    const isActive =
      cellData.isHidden && (shouldShowHiddenCells || isClickedOnCell);

    const isFailed = cellData.isHidden === false && isClickedOnCell === true;

    const isPointerEventsDisabled =
      shouldShowHiddenCells || isClickedOnCell
        ? "pointer-events-none"
        : "pointer-events-auto";

    const cellWidthAndHeight = levels[level].fieldSize / (3 + level) - 8;

    return (
      <div
        className={`m-1 flex justify-center items-center ${
          theme === "light" ? "bg-gray-700" : "bg-blue-900"
        } ${isPointerEventsDisabled}`}
        style={{
          width: cellWidthAndHeight,
          height: cellWidthAndHeight
        }}
        onClick={this.onCellClick}
        id={cellData.id}
      >
        <div
          className={`animations-active ${
            theme === "light" ? "bg-green-600" : "bg-teal-400"
          } ${isActive ? "w-full h-full" : "w-0 h-0 "}`}
        ></div>
        <div
          className={`animations-failed bg-red-600 ${
            isFailed ? "w-full h-full" : "w-0 h-0 "
          }`}
        ></div>
      </div>
    );
  }
}
export default Cell;

*/