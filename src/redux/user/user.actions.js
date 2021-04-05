
import {setUserType} from './User.types'
export const setUser = user=>{ 
    return {
        type:setUserType,
        payload:user
    }
}