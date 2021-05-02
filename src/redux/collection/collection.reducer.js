import {collectionType} from './collection.types'

const INITIAL_STATE= {
  collection:null
}

const collectionReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
      case collectionType.getCollectionData:
        return {
         ...state,
         collection: action.payload
        }
        default:
            return state
    }
}

export default collectionReducer