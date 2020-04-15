import { observable } from "mobx";

class GridCell{
    @observable id : string
    @observable isHidden : boolean

    constructor (eachGridId:string, isHiddenOrNot:boolean){
        this.id=eachGridId
        this.isHidden = isHiddenOrNot
    }
}

export default GridCell