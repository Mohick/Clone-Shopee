import { useEffect, useState } from "react";
import "./Banner Max-width 600px.css";
import "./Banner Min-width 1000px.css";
import BannerShope from "../../Library Banner/Banner Shopee";

function BannerMainPage() {
  return (
    <div id="banner__main__page">
      <div className="banner__main__page--layout layout">
        <div className="banner__main__page--banner"> 
          <BannerShope
            url={"http://localhost:3000/api__banner__side__event"}
            classItems={"BannerMainPage"}
          />
        </div>
        <div className="banner__main__page__box--frame-side-event">
          <div className="banner__main__page__box__frame_side_event--img">
            <img
              width={"100%"}
              height={"100%"}
              src="./Main Page Site Event/side event 1.jpg"
              alt=""
            />
          </div>
          <div className="banner__main__page__box__frame_side_event--img">
            <img
              width={"100%"}
              height={"100%"}
              src="./Main Page Site Event/side event 2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerMainPage;
