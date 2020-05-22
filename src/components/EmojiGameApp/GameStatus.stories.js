import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs'

import '../../styles/tailwind.css'

import WinOrLose from './WinOrLose'

export default {
    title : "EmojiGame/GameStatus",
    component : WinOrLose,
    decorators:[withKnobs]
}


export const defaultView = () => <WinOrLose 
                                    theme={"Dark"}
                                    topScore = {12}
                                    score = {3}
                                    playAgain = {action("playAgain clicked")}
                                    resetGame = {action("ResetGame Clicked")}
                                />

export const knobs = () =>
    <WinOrLose 
        theme= {text("theme", "Light")}
        topScore = {number("top score",12)}
        score = {number("score", 3)}
        playAgain = {action("playAgain clicked")}
        resetGame = {action("ResetGame Clicked")}
    />