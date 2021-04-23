import React from 'react'
import {Route} from "react-router-dom"


import CollectionPage  from './collectionpage'
import CollectionOverview from '../components/collection_overview'




const Shop= ({match})=>{
   
    return(
        <div className="shop-page">
                
                <Route  exact  path={`${match.path}`}  component={CollectionOverview}/>  
                <Route   path={`${match.path}/:categoryId`}  component={CollectionPage}/>  

       </div>
    )
}


export default Shop