import {combineReducers} from "redux";
import HomeReducer from "./Home/HomeReducer";

// console.log(homeReducer())

const rootReducer = combineReducers({
    home: HomeReducer,
})

export default rootReducer;
