import { observable, action } from 'mobx';
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = null;
    }

<<<<<<< HEAD
    @action.bound
    setCurrentTheme(theme1) {
        this.selectedTheme = theme1;
=======
    setCurrentTheme = (mode) => {
        this.selectedTheme = mode;
>>>>>>> c3417a7ac6bdac69d2f34581fbe28436bed0bc9d
    }
}

const theme = new ThemeStore;
export default theme;
