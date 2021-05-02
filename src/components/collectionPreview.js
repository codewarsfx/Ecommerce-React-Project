import React from 'react'
import styled from 'styled-components'
import CollectionItem from './collectionItem'
import {Link} from 'react-router-dom'



const CollectionPreview= ({items,title,})=>{
    return(
        <Wrapper>
           <Link to={`shop/${title.toLowerCase()}`}> <h1 className="title">{title.toUpperCase()}</h1></Link>
            <div className='preview'>
            {
               // @ts-ignore
                items.filter((item,id) =>id < 4).map((item) => <CollectionItem key={item.id} item={item}/> )
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