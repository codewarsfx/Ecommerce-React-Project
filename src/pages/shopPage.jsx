import React,{useEffect,useState} from 'react'
import {Route} from "react-router-dom"
import {connect} from 'react-redux'


import {getCollection} from '../redux/collection/collection.action'
import {firestore,fetchCollectionData} from '../components'
import CollectionPage  from './collectionpage'
import CollectionOverview from '../components/collection_overview'
import {WithSpinner} from '../components'



const CollectionOverviewWithLoading = WithSpinner(CollectionOverview)
const CollectionPageLoading = WithSpinner(CollectionPage)



const Shop= ({match,setCollectionData})=>{
    
    const [isLoading, setLoadingState] = useState(true)
    
   useEffect(()=>{
            const collectionRef = firestore.collection('items')
           const subscribeToCOllectionFirestore= collectionRef.onSnapshot(async (snapshot)=>{
       
         setCollectionData(await fetchCollectionData(snapshot))
         setLoadingState(!isLoading)
        
        }
        )
    return subscribeToCOllectionFirestore   
   }
  ,[]  
   )
       
   
    return(
        <div className="shop-page">
                
                <Route  exact  path={`${match.path}`}  render={(props)=> <CollectionOverviewWithLoading isLoading={isLoading} {...props}/>}/>  
                <Route   path={`${match.path}/:categoryId`}  render={(props)=> <CollectionPageLoading isLoading={isLoading} {...props}/>}/>  

       </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    setCollectionData :(item)=>{
        dispatch(getCollection(item))
    }
})

export default connect(null, mapDispatchToProps)(Shop)