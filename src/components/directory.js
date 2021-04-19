import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'




import MenuItem from './menu-item'
import {directoryDataSelector} from '../redux/directory/directory.selector'




const Directory = ({directory})=> {


    return(

        <Wrapper>
            {
                directory.map(item => <MenuItem key={item.id} {...item}/>)
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


const mapStatetoProps = createStructuredSelector({
    directory: directoryDataSelector
})


export default connect(mapStatetoProps)(Directory)