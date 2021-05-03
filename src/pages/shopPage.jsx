import React,{useEffect} from'react'
import {Route} from "react-router-dom"
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import {getCollectionAsync} from '../redux/collection/collection.action'
import {IsFetchingSelector,isCollectionLoadedSelector} from '../redux/collection/collection.selector'
import CollectionPage  from './collectionpage'
import CollectionOverview from '../components/collection_overview'
import {WithSpinner} from '../components'



const CollectionOverviewWithLoading = WithSpinner(CollectionOverview)
const CollectionPageLoading = WithSpinner(CollectionPage)



const Shop= ({match,isFetching,setCollectionData,collectionLoaded})=>{
    
    useEffect(()=>{
          setCollectionData()
    },[])
     
    return(
        <div className="shop-page">
                <Route  exact  path={`${match.path}`}  render={(props)=> <CollectionOverviewWithLoading isLoading={isFetching} {...props}/>}/>  
                <Route   path={`${match.path}/:categoryId`}  render={(props)=> <CollectionPageLoading isLoading={!collectionLoaded} {...props}/>}/>  

       </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    setCollectionData : ()=>{
        dispatch(getCollectionAsync())
    }
})

const mapStateToProps = createStructuredSelector({
    isFetching : IsFetchingSelector,
    collectionLoaded:isCollectionLoadedSelector
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)