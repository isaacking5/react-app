import { observable, action } from "mobx";

class GridThemeStore {
    @observable selectedTheme : string
    constructor (){
        this.selectedTheme = "dark"
    }

    @action.bound
    onChangeSelectedTheme(){
        this.selectedTheme = this.selectedTheme === 'dark'?"light":"dark"
    }


}

const gridThemeColor = new GridThemeStore
export default gridThemeColor