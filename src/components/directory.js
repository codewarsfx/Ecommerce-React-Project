import React, { useState } from 'react'
import styled from 'styled-components'
import {homeSections} from '../Context/mockData'
import MenuItem from './menu-item'


const Directory = ()=> {

    const [section,updateSection]=useState(homeSections)

    return(

        <Wrapper>
            {
                section.map(item => <MenuItem key={item.id} {...item}/>)
            }
        </Wrapper>
        
    )


}

const Wrapper= styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


export default Directory