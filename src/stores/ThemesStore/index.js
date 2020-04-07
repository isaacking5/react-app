import { observable } from 'mobx'
class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = false;
    }

    setCurrentTheme = (theme1) => {
        this.selectedTheme = theme1;
        // if(this.selectedTheme === false)
        //     this.selectedTheme = true;
        // else
        //     this.selectedTheme = false;
    }

    //   onChangeTheme = (mode) => {
    //     this.selectedTheme = mode;
    //   }
}

const theme = new ThemeStore;
export default theme;
