import React, { useState } from 'react'
import {homeSections} from '../Context/mockData'
import {CollectionPreview} from '../components'


const Shop= ()=>{
    const [itemData,setItemData]= useState(homeSections)
    return(
       <div className="shop-page">
           {
              itemData.map(({id,...rest})=>{
                  return(
                      <CollectionPreview key={id} {...rest} />
                  )
              })
           }
       </div>
    )
}


export default Shop