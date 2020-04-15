import { observable, action } from "mobx";
import GridCell from '../GridGameModel'

class GridGameStore {
    @observable currentLevelGridCells : Array<object>
    @observable level : number = 0
    @observable topLevel : number = 0
    @observable selectedCellsCount : number = 0
    @observable isGameCompleted : boolean = false

    constructor (){
        this.currentLevelGridCells = []
        this.setGridCells
    }

    @action.bound
    onCellClick(){

    }

    @action.bound
    setGridCells(){
        const gridSize = 3 + (this.level)
        for(let i=0; i<gridSize; i++){
            const gridCell = new GridCell(Math.random.toString(), false)
            this.currentLevelGridCells.push(gridCell)
        }

    }

    @action.bound
    goToNextLevelAndUpdateCells(){

    }

    @action.bound
    goToInitialLevelAndUpdateCells(){

    }

    @action.bound
    resetSelectedCellsCount(){

    }

    @action.bound
    incrementSelectedCellsCount(){

    }

    @action.bound
    onPlayAgainClick(){

    }

    @action.bound
    resetGame(){

    }

    @action.bound
    setTopLevel(){

    }
}

const gridGameStore = new GridGameStore()
export default gridGameStore