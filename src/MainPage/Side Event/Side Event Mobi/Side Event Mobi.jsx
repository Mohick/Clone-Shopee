import { memo } from "react";
import "./Side Event Mobi Max-600px.css";
import './Side Event Mobi Min-1000px.css'
import { handleSideEventMainPage } from "./handle scroll side event/handle scroll side event";
function SideEventMobiMainPage({
  dataSideEventMobiFirts = [],
  dataSideEventMobiSeccond = [],
}) {
  return (
    <div id="side__event__mobi__main__page"> 
      <div className="side__event__mobi__main__page--items" onScroll={handleSideEventMainPage}>
        <div className="side__event__mobi__main__page__items--first">
          {dataSideEventMobiFirts.map((item, index) => {
            return (
              <div className="side__event__mobi__main__page__items__first--box" key={index}>
                <div className="side__event__mobi__main__page__items__first__box--img">
                  <img loading="lazy" width={"100%"} height={"100%"} src={item.img} alt="" />
                </div>
                <div className="side__event__mobi__main__page__items__first__box--title">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="side__event__mobi__main__page__items--seccond">
          {dataSideEventMobiSeccond.map((item, index) => {
            return (
              <div
                className="side__event__mobi__main__page__items__seccond--box"
                key={index}
              >
                <div className="side__event__mobi__main__page__items__seccond__box--img">
                  <img loading="lazy" width={"100%"} height={"100%"} src={item.img} alt="" />
                </div>
                <div className="side__event__mobi__main__page__items__seccond__box--title">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="side__event__mobi__main__page--scroll">
        <div className="side__event__mobi__main__page__scroll--box">
            <div className="side__event__mobi__main__page__scroll__box--bar">

            </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SideEventMobiMainPage);
