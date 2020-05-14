import { observable, action } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = false;
    }

    @action.bound
    setCurrentTheme(mode) {
        this.selectedTheme = mode;
    }
}

const theme = new ThemeStore;
export default theme;
