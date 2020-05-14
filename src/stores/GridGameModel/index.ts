import { observable } from "mobx";

class GridCellModel{
    @observable id : string
    @observable isHidden : boolean

    constructor (eachGridId:string, isHiddenOrNot:boolean){
        this.id=eachGridId
        this.isHidden = isHiddenOrNot
    }
}

export default GridCellModel