import React from 'react'
import styled from 'styled-components'
import CollectionItem from './collectionItem'



const CollectionPreview= ({items,title,})=>{
    return(
        <Wrapper>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
            {
               // @ts-ignore
                items.filter((item,id) =>id < 4).map(({id,...rest}) => <CollectionItem key={id} {...rest}/> )
            }

            </div>
        </Wrapper>
    )
}


const Wrapper= styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }



`


export default CollectionPreview