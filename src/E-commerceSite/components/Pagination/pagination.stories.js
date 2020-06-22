import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean,color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'

import {Pagination} from '.'

export default {
    title : "Pagination/pageButton",
    component : Pagination,
    decorators : [withKnobs]
}

export const defaultView = () => <Pagination />