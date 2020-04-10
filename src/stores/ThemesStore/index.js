import { observable, action } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = null;
    }
    @action.bound
    setCurrentTheme(mode) {
        this.selectedTheme = mode;
    }
}

const theme = new ThemeStore;
export default theme;
