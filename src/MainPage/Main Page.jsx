import { memo } from "react";
import BannerMainPage from "./Banner/Banner";
import SideEventMainPage from "./Side Event/Side Event";
import CategoriesMainPage from "./CATEGORIES/CATEGORIES";
import FlashSale from "./Flash sale/Flash Sale";
import ShopeeSmallMainPage from "./Shopee small/Shopee small";
import TopProductMainPage from "./Top Product/Top Product";
import DailyDiscoverMainPage from "./Daily Discover/Daily Discover";



function MainPage() {
    return <>
    <BannerMainPage/>
    <SideEventMainPage/>
    <CategoriesMainPage/>
    <FlashSale/>
    <ShopeeSmallMainPage/>
    <TopProductMainPage/>
    <DailyDiscoverMainPage/>
    </>
}

export default memo(MainPage);