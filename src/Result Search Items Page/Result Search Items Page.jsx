import axios from "axios";
import { Icons } from "../Container  Component  SVG ICON/Manage Icon";
import FilterResultSearchItems from "./Filter Result Search Items/Filter Result Search Items";
import ItemsNeedSearch from "./Items Need Search/Items Need Search";
import NavigationResultItems from "./Navigation Mobi/Navigation Mobi";
import RelateShopResultSearchItems from "./Relate Shop/Relate Shop";
import "./Result Search Items Page Max-width 600px.css";

import "./Result Search Items Page Min-width 1000px.css";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
const ResultSearchItemsPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/94311c5e-d335-4641-8b5d-2a1e9d045b3c")
        .then((result) => {
          const data = result.data;
          setItems(data);
        });
    }, 0);
    return () => {
      clearTimeout(getData);
    };
  }, []);

  return items.length == 0 ? undefined : (
    <div id="result__search__items__page">
      <div className="result__search__items__page--layout layout">
        <NavigationResultItems />

        <div className="result__search__items__page--filter">
          <FilterResultSearchItems />
        </div>
        <div className="result__search__items__page--items">
          <RelateShopResultSearchItems />
          <ItemsNeedSearch data={items} />
          <div className="result__search__items__page__items--length">
            <Pagination length={Math.floor(items.length / 40) + 1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSearchItemsPage;
