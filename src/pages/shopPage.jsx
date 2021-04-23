import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'



import {collectionDataSelector} from '../redux/collection/collection.selector'
import {CollectionPreview} from '../components'


const Shop= ({collection})=>{

    return(
       <div className="shop-page">
           {
              collection.map(({id,...rest})=>{
                  return(
                      <CollectionPreview key={id} {...rest} />
                  )
              })
           }
       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: collectionDataSelector
})


export default connect(mapStateToProps)(Shop)