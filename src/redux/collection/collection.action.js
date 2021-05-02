import {collectionType} from './collection.types'

export const  getCollection = (data)=>{
    return {
        type: collectionType.getCollectionData,
        payload: data
    }
}