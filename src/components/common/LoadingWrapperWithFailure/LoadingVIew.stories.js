import React from 'react'
import { withKnobs} from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'

export default {
    component: LoadingView,
    title: 'Common/LoadingView'
 }

 export const defaultView = () => <LoadingView />

 export const knobs = () =>{
     <LoadingView />
 }

 knobs.story = {
    decorators: [withKnobs]
 }

 