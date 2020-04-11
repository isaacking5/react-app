import { observable, action } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = false;
    }

    @action.bound
<<<<<<< HEAD
    setCurrentTheme(theme1) {
        this.selectedTheme = theme1;
=======
    setCurrentTheme(mode) {
        this.selectedTheme = mode;
>>>>>>> c183ddd6eca55986299b6db65c3d22725e77c9ff
    }
}

const theme = new ThemeStore;
export default theme;
