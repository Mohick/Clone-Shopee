import axios from "axios";
import FilterResultSearchItems from "./Filter Result Search Items/Filter Result Search Items";
import ItemsNeedSearch from "./Items Need Search/Items Need Search";
import NavigationResultItems from "./Navigation Mobi/Navigation Mobi";
import RelateShopResultSearchItems from "./Relate Shop/Relate Shop";
import "./Result Search Items Page Max-width 600px.css";
import LoadingPage from "../Loading/loading__page";
import "./Result Search Items Page Min-width 1000px.css";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import EndLoadingPage from "../Loading/end__loading";
const ResultSearchItemsPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = setTimeout(async () => {
      await  Promise.all([
        axios.get("https://json-be-shopee.onrender.com/api__search/"),
        axios.get("https://json-be-shopee.onrender.com/info_store_relate"),
      ]).then(([res_api_search, res_api_info_store_relate]) => {
        const api_search = res_api_search.data;
        const api_info_store_relate = res_api_info_store_relate.data;
        setItems([api_search, api_info_store_relate])
      });
    }, 0);
    return () => {
      clearTimeout(getData);
    };
  }, []);
 
  return items.length < 2 ? (
    <LoadingPage />
  ) : (
    <>
      <EndLoadingPage />
      <div id="result__search__items__page">
        <div className="result__search__items__page--layout layout">
          <NavigationResultItems />

          <div className="result__search__items__page--filter">
            <FilterResultSearchItems data={items[0]} />
          </div>
          <div className="result__search__items__page--items">
            <RelateShopResultSearchItems info_store_relate={items[1]} />
            <ItemsNeedSearch data={items[0]} />
            <div className="result__search__items__page__items--length">
              <Pagination length={items[0].length} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default ResultSearchItemsPage;
