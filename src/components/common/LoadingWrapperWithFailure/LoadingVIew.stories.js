import React from 'react'
import { withKnobs, color} from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'

export default {
    component: LoadingView,
    title: 'Common/LoadingView',
    decorators: [withKnobs]
 }

 export const defaultView = () => <LoadingView color={color("loaderColor", "blue")}/>

 export const knobs = () =>
     <LoadingView color={color("loaderColor", "blue")}/>

//  knobs.story = {
//     decorators: [withKnobs]
//  }

 