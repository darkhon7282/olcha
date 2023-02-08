import {ADD_TO_LIKE} from "../action/actionType"

const heart = (state=[], action)=>{
    switch(action.type){
        case "ADD_TO_LIKE":
            return state = [...state, action.payload]
        default:
            return state
    }
}

export default heart