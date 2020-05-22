import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../styles/tailwind.css'
import EachEmojiCard from './EachEmojiCard'
const eachEmoji = {
    id:1, 
    isClicked:false, 
    name:"Exploding Head", 
    image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"
}

const darkTheme = "Dark"
const lightTheme = "Light"

export default {
    component: EachEmojiCard,
    title: 'EmojiGame/emojiCard',
    decorators : [withKnobs]
 }

 export const defaultView = () => <EachEmojiCard 
                                        eachEmoji={eachEmoji} 
                                        theme={darkTheme}
                                        onEmojiClick={action("emoji clicked")}
                                    />


export const knobs = () => (
   <EachEmojiCard
    eachEmoji={eachEmoji} 
    theme={text("darkTheme", "Dark")}
    onEmojiClick={action("emoji clicked")}
   />
)