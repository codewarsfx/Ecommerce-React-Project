import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'



import {directoryDataSelector} from '../redux/directory/directory.selector'
import {CollectionPreview} from '../components'


const Shop= ({itemData})=>{

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

const mapStateToProps = createStructuredSelector({
    itemData: directoryDataSelector
})


export default connect(mapStateToProps)(Shop)