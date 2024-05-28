import { Icons } from "../Container  Component  SVG ICON/Manage Icon";
import FilterResultSearchItems from "./Filter Result Search Items/Filter Result Search Items";
import ItemsNeedSearch from "./Items Need Search/Items Need Search";
import NavigationResultItems from "./Navigation Mobi/Navigation Mobi";
import RelateShopResultSearchItems from "./Relate Shop/Relate Shop";
import "./Result Search Items Page Max-width 600px.css";

import "./Result Search Items Page Min-width 1000px.css";
const ResultSearchItemsPage = () => {
  return (
    <div id="result__search__items__page">
      <div className="result__search__items__page--layout layout">
        <NavigationResultItems/>
       
        <div className="result__search__items__page--filter">
          <FilterResultSearchItems />
        </div>
        <div className="result__search__items__page--items">
          <RelateShopResultSearchItems />
          <ItemsNeedSearch />
        </div>
      </div>
    </div>
  );
};

export default ResultSearchItemsPage;
