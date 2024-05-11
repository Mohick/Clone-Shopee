import "./Categories Max-width 600px.css";
import "./Categories Min-width 1000px.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesFirstItemsMainPage from "./Categories first items";
import IconAngleLeft from "../../Container  Component  SVG ICON/Icon Angle Left";
import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import { handleArrowcateGoriesMainPage } from "./handle arrow scroll";

function CategoriesMainPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;

    axios
      .get("https://run.mocky.io/v3/32501418-769c-42fe-b3cd-46404a7aaebd")
      .then((response) => {
        if (mounted) {
          const data = response.data;
          const hashMapData = [data[0].items, data[1].items];
          setItems(hashMapData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div id="categories__main__page">
      <div className="categories__main__page--layout layout">
        <div className="categories__main__page--title">Categories</div>
        <div className="categories__main__page--body">
          <div className="categories__main__page__body--first">
            <CategoriesFirstItemsMainPage firstData={items[0]} />
          </div>
          <div className="categories__main__page__body--seccond">
            <CategoriesFirstItemsMainPage firstData={items[1]} />
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
