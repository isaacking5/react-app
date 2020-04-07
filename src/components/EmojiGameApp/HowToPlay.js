import React from 'react'
import {Footer, InstructionHeading, Rule} from './styledComponents'

class HowToPlay extends React.Component{
    render(){ 
        const {theme} = this.props
       return( 
       <Footer theme={theme}>
            <InstructionHeading>How to play ?</InstructionHeading>
            <Rule>Get points by clicking on an image but don't click on any image more than once!</Rule>
        </Footer>
        )
    }
}

export default HowToPlay