import React from 'react';
import {WinOrLoseBlock, Score, MessageText, PlayAgainButton} from './styledComponents'
class WinOrLose extends React.Component{
    render(){
        const{score, topScore, playAgain, resetGame, theme} = this.props
        return(
              <WinOrLoseBlock theme = {theme}>
                  <Score extraHeight>{score}</Score>
                  <MessageText  score={score}>{score === 12 ? "You Won !": "You Lose !"}</MessageText>
                  <PlayAgainButton onClick = {score>topScore ? playAgain : resetGame}>Play Again</PlayAgainButton>
            </WinOrLoseBlock>
        );
    }
}

export default WinOrLose