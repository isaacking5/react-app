import React from 'react';
import NavBar from './NavBar.js';
import EmojiCard from './EmojiCard.js'
import HowToPlay from './HowToPlay.js'
import WinOrLose from './WinOrLose.js'
import {EmojiContainer} from'./styledComponents'
class EmojiesGame extends React.Component{
    state = {
        emojis : [
            {id:1, isClicked:false, name:"Exploding Head", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},
            {id:2, isClicked:false, name:"Grinning Face with Sweat", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
            {id:3, isClicked:false, name:"Smiling Face with Heart-Eyes", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
            {id:4, isClicked:false, name:"Smirking Face", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
            {id:5, isClicked:false, name:"Thinking Face", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
            {id:6, isClicked:false, name:"Winking Face", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
            {id:7, isClicked:false, name:"Grinning Face", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
            {id:8, isClicked:false, name:"Crying Face", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
            {id:9, isClicked:false, name:"Astonished Face ", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
            {id:10, isClicked:false, name:"Face with Tears of Joy", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
            {id:11, isClicked:false, name:"Star-Struck", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
            {id:12, isClicked:false, name:"Winking Face with Tongue", image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"},
        ],
        score: 0,
        topScore : 0,
        gameState : "Playing",
        selectedTheme : "Light",
    }
    onEmojiClick = (clickedEmoji) =>{
        if(clickedEmoji.isClicked === true)
        {
            this.setState({gameState:"end"})
        }
        else{
            this.incrementScore()
            this.shuffleEmojis(clickedEmoji)
        }
    }

    shuffleEmojis = (clickedEmoji) =>{
        let previousEmojiesList = this.state.emojis;
        previousEmojiesList.forEach(EachEl => {
            if(EachEl.id === clickedEmoji.id)
                EachEl.isClicked = true;
        });
        let shuffledEmojisList = previousEmojiesList.sort(function(){
            return 0.5-Math.random();
          });
        // console.log(shuffledEmojisList);
    }

    incrementScore = () =>{
        let PreviousScore = this.state.score + 1
        PreviousScore === 12 ? this.setState({score:PreviousScore, gameState:"end"}):
                                this.setState({score:PreviousScore});

    }
     
    onPlayAgainClick = () =>{
        this.resetGame()
    }

    resetGame = () =>{
        const {score, topScore} = this.state
        let previousEmojiesList = this.state.emojis
        previousEmojiesList.forEach(EachEl =>{
            EachEl.isClicked = false;
        });
        score>topScore? this.setTopScore():this.setState({score:0, gameState:"Playing"})
    }

    setTopScore = () =>{
        this.setState({topScore:this.state.score, score:0, gameState:"Playing"})
    }

    onChangeTheme = () =>{
        let UpdateSelectedTheme = this.state.selectedTheme === "Light"?'Dark':'Light'
        this.setState({selectedTheme:UpdateSelectedTheme})
    }
    render(){
        const {score, topScore, selectedTheme} = this.state;
        return(
        <EmojiContainer>
            <NavBar score = {score} topScore = {topScore} themeChange={this.onChangeTheme} theme ={selectedTheme}/>
            {this.state.gameState === "Playing" ?
            <EmojiCard emojis = {this.state.emojis} onEmojiClick={this.onEmojiClick} theme = {selectedTheme}/>: 
            <WinOrLose score={score} topScore={topScore} playAgain={this.onPlayAgainClick} resetGame={this.resetGame} theme ={selectedTheme}/>}
            <HowToPlay theme ={selectedTheme}/>
        </EmojiContainer>
        )
    }
}

export default EmojiesGame