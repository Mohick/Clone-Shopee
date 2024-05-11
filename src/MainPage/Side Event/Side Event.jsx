import axios from "axios";
import { memo, useCallback, useEffect, useState } from "react";
import SideEventMobiMainPage from "./Side Event Mobi/Side Event Mobi";
import "./Side Event Max-width 600px.css";
import "./Side Event Min-width 1000px.css";
import SideEventPcMainPage from "./Side Event Pc/Side Event Pc";
function SideEventMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const callAPI = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/24b22676-1dd3-417d-9e0d-da405f098ea4")
        .then((response) => {
          const dataArry = response.data[0].items;
          const dataArry1 = response.data[1].items;
          const dataArry2 = response.data[2].items;
          console.log(response);
          setItems([dataArry, dataArry1, dataArry2]);
        });
    }, 0);
    return () => {
      return clearTimeout(callAPI);
    };
  }, []);

  useCallback(() => {}, []);

  return (
    <div id="side__event">
      <div className="side__event--layout layout">
        <SideEventMobiMainPage
          dataSideEventMobiFirts={items[0]}
          dataSideEventMobiSeccond={items[1]}
        />
          <SideEventPcMainPage dataSideEventPcFirts={items[2]} />
        <div className="side__event--banner">
          <div className="side__event__banner--img--mobi"><img loading="lazy" width={'100%'} src="./Main Page Site Event/sub banner mobi.png" alt="" /></div>
          
        </div>
      </div>
    </div>
  );
}

export default memo(SideEventMainPage);
