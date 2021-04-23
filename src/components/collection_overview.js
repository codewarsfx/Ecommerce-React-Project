import React from 'react';
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'


import {collectionArraySelector} from '../redux/collection/collection.selector'
import CollectionPreview from './collectionPreview'

const CollectionOverview = ({collection})=>{
    
    
    
    return(
        <Wrapper>{
                collection.map(({id,...rest})=>{
                  return(
                      <CollectionPreview key={id} {...rest} />
                  )
              })
            }
        </Wrapper>
    )
    
    
    
}




const Wrapper =  styled.section`
  display: flex;
  flex-direction: column;
`


const mapStatetoProps = createStructuredSelector({
    collection: collectionArraySelector
})


export default connect(mapStatetoProps)(CollectionOverview)