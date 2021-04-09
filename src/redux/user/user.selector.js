import {createSelector} from 'reselect'

const userSelect = state => state.user


export const userAuthSelect = createSelector([userSelect],(user)=>user.currentUser)