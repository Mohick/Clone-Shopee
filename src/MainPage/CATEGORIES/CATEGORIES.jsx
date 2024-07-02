import "./Categories Max-width 600px.css";
import "./Categories Min-width 1000px.css";
import CategoriesFirstItemsMainPage from "./Categories first items";
import IconAngleLeft from "../../Container  Component  SVG ICON/Icon Angle Left";
import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import { handleArrowcateGoriesMainPage } from "./handle arrow scroll";
import reducerBanner from "../store/create__store";

function CategoriesMainPage() {
  const {itemsCategories} = reducerBanner()
  if(itemsCategories.length < 2) return null;
  return (
    <div id="categories__main__page">
      <div className="categories__main__page--layout layout">
        <div className="categories__main__page--title">Categories</div>
        <div className="categories__main__page--body">
          <div className="categories__main__page__body--first">
            <CategoriesFirstItemsMainPage firstData={itemsCategories[0]?.items} />
          </div>
          <div className="categories__main__page__body--seccond">
            <CategoriesFirstItemsMainPage firstData={itemsCategories[1]?.items} />
          </div>
        </div>
          <div onClick={()=>handleArrowcateGoriesMainPage('prev')} className="categories__main__page--arrow-left">
            <IconAngleLeft />
          </div>
          <div onClick={()=>handleArrowcateGoriesMainPage('next')}  className="categories__main__page--arrow-right categories__main__page--arrow-active">
            <IconAngleRight />
          </div>
      </div>
    </div>
  );
}

export default CategoriesMainPage;
