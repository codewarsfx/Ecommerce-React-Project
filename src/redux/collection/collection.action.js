import {collectionType} from './collection.types'
import {firestore,fetchCollectionData} from '../../components'

export const  getCollectionStart=()=>({
    type: collectionType.getCollectionDataStart
})

export const getCollectionFail = errorMessage=>({
    type:collectionType.getCollectionDataFail,
    payload: errorMessage
})

export const getCollectionSuccess = collection=>({
    type:collectionType.getCollectionDataSuccess,
    payload:collection
})


export const getCollectionAsync = ()=>{
    return dispatch => {  
        dispatch(getCollectionStart())
        const collectionRef = firestore.collection('items')
        collectionRef.get()
        .then(data=>{
            const collection = fetchCollectionData(data)
            dispatch(getCollectionSuccess(collection)) 
        })
        .catch(error=>{
            dispatch(getCollectionFail(error.message))
        })   
    }
}