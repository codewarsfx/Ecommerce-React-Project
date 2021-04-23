import React from 'react';
import styled from 'styled-components'
import {connect } from "react-redux"



import {collectionListSelector} from '../redux/collection/collection.selector'






const  CollectionPage = ({collectionList})=> {
    console.log(collectionList)     
    return (
         <h1>hey</h1>
    )
   
}


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }

`

const mapStateToProps = (state,ownProps) => ({
    collectionList : collectionListSelector(ownProps.match.params.categoryId)(state)
})


export default  connect(mapStateToProps)(CollectionPage)