import { observable } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = null;
    }

    setCurrentTheme = (mode) => {
        this.selectedTheme = mode;
    }
}

const theme = new ThemeStore;
export default theme;
