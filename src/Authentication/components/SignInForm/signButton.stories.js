import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean,color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'

import {SigninBtn} from './index'

export default {
    title : "Buttons/SignButton",
    component : SigninBtn,
    decorators : [withKnobs],
}

export const defaultView = () => <SigninBtn isClicked={false} displayText={"Sign in"}/>
 
                                
export const loadigView = () => <SigninBtn 
                                isClicked={true}
                                apiStatus = {100}  
                                onRetryClick = {action("networlCall triggred")}
                                style = {{width:"100px", backgroundColor:"black"}}
                            />


export const knobs = () => (
    <SigninBtn 
        isClicked={boolean("isClickedOrNot",true)}
        apiStatus = {number("apiStatus",100)}  
        onRetryClick = {action("networlCall triggred")}
        style = {{width:number("Width",`${100}px`), backgroundColor:color("background","black")}}
        displayText={text("text","Sign in")}
    />
)