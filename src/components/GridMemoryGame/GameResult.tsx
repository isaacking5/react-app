import React from 'react'
import {WinningLevel, Button} from './styledComponents'

type GameResultProps = {
    level:number
    playAgain : any
    selectedTheme : string
}
class GameResult extends React.Component <GameResultProps>{
    render(){
        const {level, playAgain, selectedTheme} = this.props
        return(
            <div>
                <WinningLevel className = "transition-all duration-700" backGroundColor = {selectedTheme}>{level}</WinningLevel>
                <p className="text-2xl text-center text-green-800 font-bold transition-all duration-700">Congratulation you have completed all the levels..</p>
                <div className = "text-center m-6">
                    <Button onClick = {playAgain} className=" transition-all duration-700" backGroundColor = {selectedTheme}>Play Again</Button>
                </div>
            </div>
            
        )
    }
}

export default GameResult