import { observable, action } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor(){
        this.selectedTheme = null
    }

    @action.bound
    setCurrentTheme(theme1) {
        this.selectedTheme = theme1;
    }
}

const theme = new ThemeStore();
export default theme;
