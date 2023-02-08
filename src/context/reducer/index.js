import { combineReducers } from "redux";
import heart from "./heart";

const rootReducer = combineReducers({
    water: ()=> "redux water",
    heart
})

export default rootReducer;