import { observable, action, toJS } from "mobx";
import GridCellModel from '../GridGameModel'

class GridGameStore {
    @observable currentLevelGridCells : Array<GridCellModel>
    @observable level : number = 0
    @observable topLevel : number = 0
    @observable selectedCellsCount : number = 0
    @observable isGameCompleted : boolean = false
    @observable currentDisplayGrids : Array<number> = []
    @observable ramdomKey
    @observable sameIndexClicked:any = []

    constructor (){
        this.currentLevelGridCells = []
        this.setGridCells()
    }

    @action.bound
    onCellClick(clickedIndex){
        const resultOfIndex = this.currentDisplayGrids.find((eachEl)=>{
            return eachEl === clickedIndex
            })

        if(resultOfIndex !== undefined){
            const sameIndexClickedOrNot = this.sameIndexClicked.find((eachElement)=>{
                            return eachElement === clickedIndex
            })
            
            if(sameIndexClickedOrNot === undefined){
                this.incrementSelectedCellsCount()
                this.sameIndexClicked.push(clickedIndex)
            }

            if(this.selectedCellsCount === 3+this.level){
                // alert("KEEP DOING... cleared the level!!!")
                setTimeout(()=> this.goToNextLevelAndUpdateCells(), 500)
            }
            return true
        }
           
        else{
            setTimeout(()=> this.resetGame(), 500)
            return false
        }
    }

    @action.bound
    setGridCells(){
        const gridSize = Math.pow(3 + (this.level), 2) 
        for(let i=0; i<gridSize; i++){
            const gridCellModel = new GridCellModel(Math.random().toString(), false)
            this.currentLevelGridCells.push(gridCellModel)
        }

        while(this.currentDisplayGrids.length < (3+this.level)){
            const randomIndex = Math.floor(Math.random()*Math.floor(gridSize))
            const numberInArry = this.currentDisplayGrids.find((eachEl)=>{
                return eachEl === randomIndex
            })
            if(numberInArry === undefined){
                this.currentDisplayGrids.push(randomIndex)
            }
        }
        console.log(this.currentDisplayGrids)
        this.ramdomKey = Math.random()
    }

    @action.bound
    goToNextLevelAndUpdateCells(){
        this.currentLevelGridCells = []
        this.currentDisplayGrids = []
        this.sameIndexClicked = []
        this.level = this.level + 1
        this.resetSelectedCellsCount()
        this.setGridCells()
    }

    @action.bound
    goToInitialLevelAndUpdateCells(){
        this.currentLevelGridCells = []
        this.currentDisplayGrids = []
        this.sameIndexClicked = []
        this.level = 0
        this.resetSelectedCellsCount()
        this.setGridCells()
    }

    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount = 0
    }

    @action.bound
    incrementSelectedCellsCount(){
        this.selectedCellsCount = this.selectedCellsCount+1
    }

    @action.bound
    onPlayAgainClick(){
        this.topLevel = 0
        this.goToInitialLevelAndUpdateCells()
    }

    @action.bound
    resetGame(){
        this.setTopLevel()
        this.goToInitialLevelAndUpdateCells()
    }

    @action.bound
    setTopLevel(){
        if(this.topLevel <= this.level)
            this.topLevel = this.level
    }
}

const gridGameStore = new GridGameStore()
export default gridGameStore