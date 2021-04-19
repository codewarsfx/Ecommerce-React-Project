import {createSelector} from 'reselect'


const directorySelector = state=> state.directory;


export const  directoryDataSelector = createSelector([directorySelector],(data)=>data)