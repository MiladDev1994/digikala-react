import {combineReducers} from "redux";
import categoryReducer from "./Category/categoryReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
})

export default rootReducer;
