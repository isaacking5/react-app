import React from 'react';
import {EachEmoji, Img, EmojiName, EmojisList} from './styledComponents'
class EmojiCard extends React.Component{
    onEmojiClick = (eachEmoji) =>{
        this.props.onEmojiClick(eachEmoji);
    }
    render(){
        const {emojis, theme} = this.props;
        const emojisList = emojis.map((eachEmoji)=>{
            return(
                <EachEmoji key={eachEmoji.id} onClick = {()=>this.onEmojiClick(eachEmoji)} theme={theme}>
                    <Img src={eachEmoji.image} />
                    <EmojiName>{eachEmoji.name}</EmojiName>
                </EachEmoji>
            )
        });
        return (
        <EmojisList theme={theme}>{emojisList}</EmojisList>
        )
    }
}

export default EmojiCard