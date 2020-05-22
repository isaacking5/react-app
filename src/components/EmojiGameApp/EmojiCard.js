import React from 'react';
import {EmojisList} from './styledComponents'
import EachEmojiCard from "./EachEmojiCard";
class EmojiCard extends React.Component{
    onEmojiClick = (eachEmoji) =>{
        this.props.onEmojiClick(eachEmoji);
    }
    render(){
        const {emojis, theme} = this.props;
        const emojisList = emojis.map((eachEmoji)=>{
            return(<EachEmojiCard 
                onEmojiClick={this.onEmojiClick} 
                theme = {theme}
                eachEmoji = {eachEmoji}
            />)
        });
        return (
        <EmojisList theme={theme}>{emojisList}</EmojisList>
        )
    }
}

export default EmojiCard