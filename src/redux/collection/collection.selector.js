import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'

const idToParamsMap = { 
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5  
    
}

const collectionSelector = state => state.collection

export const collectionDataSelector = createSelector([collectionSelector],data=> data)


export const collectionListSelector = memoize(urlParam =>(
    createSelector([collectionDataSelector], (data)=> data.find(item=> item.id === idToParamsMap[urlParam]))
))


