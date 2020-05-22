import React from 'react'
import {EachEmoji, Img, EmojiName} from './styledComponents'
class EachEmojiCard extends React.Component{
    render () {
        const {theme, onEmojiClick, eachEmoji} = this.props
        return (
            <EachEmoji key={eachEmoji.id} onClick = {()=> onEmojiClick(eachEmoji)} theme={theme}>
                    <Img src={eachEmoji.image} />
                    <EmojiName>{eachEmoji.name}</EmojiName>
            </EachEmoji>
        )
    }
}

export default EachEmojiCard
