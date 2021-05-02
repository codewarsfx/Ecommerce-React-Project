import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'


const collectionSelector = state => state.collection

export const collectionDataSelector = createSelector([collectionSelector], data=> data.collection)

export const collectionArraySelector= createSelector([collectionDataSelector],data=>{
    return data? Object.keys(data).map(key=> data[key]):[]
})


export const collectionListSelector = memoize(urlParam =>(
    createSelector([collectionDataSelector], data =>{
        return data ? data[urlParam]: null
    }
)))
 

