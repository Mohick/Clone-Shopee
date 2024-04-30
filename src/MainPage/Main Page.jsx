import { memo } from "react";
import BannerMainPage from "./Banner/Banner";
import SideEventMainPage from "./Side Event/Side Event";
import CategoriesMainPage from "./CATEGORIES/CATEGORIES";
import FlashSale from "./Flash sale/Flash Sale";



function MainPage() {
    return <>
    <BannerMainPage/>
    <SideEventMainPage/>
    <CategoriesMainPage/>
    <FlashSale/>
    </>
}

export default memo(MainPage);