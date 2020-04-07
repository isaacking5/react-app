import React from 'react';
import {NavBarContainer, NavBarRight, EmojiHeading, Score, ToggleButton} from './styledComponents';
class NavBar extends React.Component{
    render(){
        const {score, topScore, themeChange, theme} = this.props;
        return (
            <NavBarContainer theme = {theme}>
                <EmojiHeading>Emoji Game</EmojiHeading>
                <NavBarRight>
                    <Score>Score: {score}</Score>
                    <Score>Top Score: {topScore}</Score>
                    <ToggleButton onClick={themeChange}>Dark Theme</ToggleButton>
                </NavBarRight>
            </NavBarContainer>
        );
    }
}

export default NavBar