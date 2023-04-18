import {combineReducers} from "redux";
import CarouselReducer from "./Carousel/CarouselReducer";
import categoriesReducer from "./Categories/categoriesReducer";
import varietiesReducer from "./Varieties/VarietiesReducer";
import homeViewReducer from "./HomeView/HomeViewReducer";
import BrandsReducer from "./Brands/BrandsReducer";
import ArticlesReducer from "./Articles/ArticlesReducer";


const rootReducer = combineReducers({
    category: categoriesReducer,
    carouselData: CarouselReducer,
    varieties: varietiesReducer,
    homeView: homeViewReducer,
    brand: BrandsReducer,
    articles: ArticlesReducer,
})

export default rootReducer;
