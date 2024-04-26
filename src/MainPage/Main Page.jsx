import { memo } from "react";
import BannerMainPage from "./Banner/Banner";
import SideEventMainPage from "./Side Event/Side Event";
import CategoriesMainPage from "./CATEGORIES/CATEGORIES";



function MainPage() {
    return <>
    <BannerMainPage/>
    <SideEventMainPage/>
    <CategoriesMainPage/>
    </>
}

export default memo(MainPage);