import {createSelector} from 'reselect'


const collectionSelector = state => state.collection

export const collectionDataSelector = createSelector([collectionSelector],data=>data)