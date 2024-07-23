import { useEffect } from "react";
import BannerMainPage from "./Banner/Banner";
import reducerBanner from "./store/create__store";
import LoadingPage from "../Loading/loading__page";
import EndLoadingPage from "../Loading/end__loading";
import SideEventMainPage from "./Side Event/Side Event";
import CategoriesMainPage from "./CATEGORIES/CATEGORIES";
import FlashSale from "./Flash sale/Flash Sale";
import ShopeeSmallMainPage from "./Shopee small/Shopee small";
import TopProductMainPage from "./Top Product/Top Product";
import DailyDiscoverMainPage from "./Daily Discover/Daily Discover";

function MainPage() {
  const {allow,callAllApiMainPage } = reducerBanner();
  useEffect(() => {
    let allows = true;
    if(allows) {
      callAllApiMainPage()
    } 
    return () => {
      allows = false;
    } 
  }, []);
  if (!allow) return <LoadingPage />;
  return (
    <>
      <EndLoadingPage />
      <BannerMainPage />
      <SideEventMainPage />
      <CategoriesMainPage/>
      <FlashSale/>
      <ShopeeSmallMainPage/>
      <TopProductMainPage/>
      <DailyDiscoverMainPage/> 
    </>
  );
}

export default (MainPage);
