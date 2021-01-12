const initalState= {
    currentUser:null
}


const UserReducer =(state=initalState,action)=>{

    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state,
                currentUser: action.payload
            }
            break;
        default:
            return state
            break;
    }
}


export default UserReducer