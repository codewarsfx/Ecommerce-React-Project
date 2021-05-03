import {collectionType} from './collection.types'

const INITIAL_STATE= {
  collection:null,
  isFetching:false,
  errorMessage:''
}

const collectionReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
      case collectionType.getCollectionDataStart:
        return {
          ...state,
          isFetching: true
        }
      case collectionType.getCollectionDataSuccess:
        return {
          ...state,
          isFetching: false,
          collection:action.payload
        }
      case collectionType.getCollectionDataFail:
        return{
          ...state,
          isFetching: false,
          errorMessage: action.payload
        }
      default:
            return state
    }
}

export default collectionReducer