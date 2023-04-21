import React from 'react';
import CarouselB from "./Carousel/Carousel";
import Servises from "./Servises/Servises";
import SpecialProducts from "./SpecialProducts/SpecialProducts";
import SpecialCategoryVarieties from "./SpecialCategoryVarieties/SpecialCategoryVarieties";
import BannerFour from "./BannerFour/BannerFour";
import Categories from "./Categories/Categories";
import BannerTow from "./BannerTwo/BannerTow";
import SpecialCategories from "./SpecialCategories/SpecialCategories";
import SpecialBrands from "./SpecialBrands/SpecialBrands";
import BannerBrand from "./BannerBrand/BannerBrand";
import MoreSells from "./MoreSells/MoreSells";
import Articles from "./Articles/Articles";




const Home = () => {

    return (
            <div className={'pb-5'}>
                <CarouselB />
                <Servises />
                <SpecialProducts />
                <SpecialCategoryVarieties />
                <BannerFour />
                <Categories />
                <BannerTow />
                <SpecialCategories />
                <SpecialBrands />
                <BannerBrand />
                <MoreSells />
                <Articles />
            </div>

    );
};

export default Home;
