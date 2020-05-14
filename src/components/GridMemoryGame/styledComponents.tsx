import styled from '@emotion/styled';
import tw from 'tailwind.macro';

type gridFieldWidthProps = {
    LevelOfGame : number
}
type colorProps = {
    colorBG: string;
    LevelOfGame : number;
}
type ClickedCellProps = {
    IsClickedCell:boolean;
}
type GamePageColorProps = {
    backGroundColor:string;
}

type GridGameFieldBlockProps = {
    pointerEvent:any
}


const GamePage  = styled.div`
    ${tw`h-screen flex items-center justify-center flex-col`};
    background-color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"#1a202c":"#f7fafc"};
`
const GridGameFieldBlock = styled.div`
    ${(props:GridGameFieldBlockProps)=> props.pointerEvent? tw`pointer-events-none`:tw`pointer-events-auto`}
`
const GridBlock = styled.div`
    width: ${(props:gridFieldWidthProps)=> `${320+(props.LevelOfGame)*32}px`};
`


const Cell = styled.div`
    ${tw`cursor-pointer`};
    width:${(props:colorProps) => `${79-(props.LevelOfGame)*6}px`};
    height:${(props:colorProps) => `${79-(props.LevelOfGame)*6}px`};
    margin : 4px;
    border-radius: 3px;
    background-color:${(props:colorProps)=> props.colorBG};
`

const ClickedCell = styled.div`
    position: absolute;
    transform-origin: center;
    transition: transform 0.7s ease;
    height: inherit;
    width: inherit;
    transition-property: all;
    border-radius: 3px;
    background-color:#81e6d9;
    transform: ${(props:ClickedCellProps)=>props.IsClickedCell? "scale(1)": "scale(0)"};
`

/*

//#81e6d9;    //${(props:clickedCellProps)=>props.IsClickedCell? "#81e6d9": "red"};
//${(props:ClickedCellProps)=> props.colorBG};
    .width-increase {
                margin-bottom: 40px;
                background-color: #00aa9d;
                border-radius: 3px;
                height: 150px;
                width: 150px;
            }

            .backColor {
                position: absolute;
                transform-origin: center;
                transition: transform 0.3s ease;
                height: inherit;
                width: inherit;
                background-color: green;
                transition-property: all;
                border-radius: 3px;
                transform: scale(0)
                transform: ${(props:ClickedCellProps)=>props.IsClickedOnCell?"scale(1)":"scale(0)"}
            }

*/
const TopLevelBlock = styled.p`
    color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"whitesmoke":"black"};
`

const Level = styled.p`
    color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"whitesmoke":"black"};
`
const WinningLevel = styled.p`
    ${tw`text-center text-4xl p-8 text-gray-200 font-semibold`};
    color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"whitesmoke":"black"};
`
const Button = styled.button`
    ${tw`font-semibold p-2 text-xl rounded-md`};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
    // border:${(props:GamePageColorProps)=> props.backGroundColor === "dark"? "2px solid whitesmoke":"2px solid black"};
    color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"whitesmoke":"black"};
    background-color:${(props:GamePageColorProps)=> props.backGroundColor === "dark"?"#2d3748":"#edf2f7"};
`
export {GridBlock, Cell, GamePage, TopLevelBlock, Level, Button, WinningLevel, GridGameFieldBlock, ClickedCell}


