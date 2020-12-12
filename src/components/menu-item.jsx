import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const MenuItem= ({title,imageUrl,size,history, routeName,match})=>{
        return (     
            <Menu style={{height:`${size==='large'?'360px':'240px'}`} }  onClick={()=>{history.push(`${match.url}${routeName}`)}} >
                <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'></div>
                <div className='content'> 
                <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </Menu>
        )
}



const Menu = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow:hidden;


    .background-image{
    background-position: center;
    background-size: cover;
    width:100%;
    height:100%;
    transition:transform .5s cubic-bezier(0.25, 0.45, 0.45, 0.95)
    }

    &:hover{
        &{
            cursor: pointer;
        }
        & .background-image{
            transform:scale(1.1)
        }

        & .content{
            opacity:0.9;
        }
        
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        opacity:0.7;
        background-color:#fff;
        position:absolute;
        transition:opacity .5s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        .title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 22px;
            color: #4a4a4a;
        }

        .subtitle {
            font-weight: lighter;
            font-size: 16px;
        }
    }
`

export default withRouter(MenuItem)