import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const NavBarContainer = styled.div`
    ${tw `flex justify-between p-6  bg-gray-100`};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
    background-color: ${props => props.theme === 'Light'? "#f7fafc":"#4a5568"};
    color: ${props => props.theme === 'Light'? "black":"white"};
`;
// const NavBarRight = NavBarContainer.withComponent('NavBarRight')
const NavBarRight = styled.div`
    ${tw `flex`};
`;
const EmojiHeading = styled.h1`
    ${tw`text-3xl font-medium`}
`
const Score = styled.span`
    ${tw`font-medium pr-6`}
    font-size: ${props => props.extraHeight ? "44px" : "18px"};
`
const ToggleButton = styled.button`
    ${tw`text-base font-medium border-solid rounded-md p-2 border border-gray-400`}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
`
const EmojiContainer = styled.div`
    ${tw`bg-gray-300 min-h-screen`}
`
const EachEmoji = styled.li`
    ${tw`flex flex-col p-6 justify-center items-center h-64  mx-4 my-4`}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
    width:300px;
    background-color: ${props => props.theme === 'Light'? "#f7fafc":"#5a67d8"};
    color: ${props => props.theme === 'Light'? "black":"whitesmoke"};
`
const EmojiName = styled.span`
    ${tw`text-base font-medium `}
`
const Img = styled.img`
    ${tw`w-40`}
`
const EmojisList = styled.ul`
    ${tw`p-2 flex flex-wrap justify-around`}
    background-color: ${props => props.theme === 'Light'? "#e2e8f0":"#2d3748"};
`
// const Footer = NavBarContainer.withComponent('Footer')
const Footer = styled.div`
    ${tw `flex flex-col p-4`};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
    background-color: ${props => props.theme === 'Light'? "#f7fafc":"#4a5568"};
    color: ${props => props.theme === 'Light'? "black":"whitesmoke"};
` 

const InstructionHeading = styled.h1`
    ${tw`text-xl font-bold`}
`
const Rule = styled.span`
    ${tw`text-xl font-medium pl-10`}
`
const WinOrLoseBlock = styled.div`
    ${tw`flex justify-center items-center flex flex-col`}
    background-color: ${props => props.theme === 'Light'? "#e2e8f0":"#2d3748"};
    color: ${props => props.theme === 'Light'? "black":"white"};
    height: 72vh
`
const MessageText = styled.div`
    ${tw`text-4xl font-bold p-2 text-red-600`}
    color: ${props=>props.score===12 ? "green":null}
`
const PlayAgainButton = styled.button`
    ${tw`text-2xl font-medium p-2 bg-indigo-600 rounded-md text-gray-100`}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
`

export {NavBarContainer, NavBarRight, EmojiHeading, Score, 
    ToggleButton, EmojiContainer, EachEmoji, EmojiName, 
    Img, EmojisList, Footer,InstructionHeading, Rule, WinOrLoseBlock,
    MessageText,PlayAgainButton,
}
