import './Side Event Pc Min-width 1000px.css'
import { memo } from "react";
import './Side Event Pc Max-width 600px.css'
function SideEventPcMainPage({ dataSideEventPcFirts = [] }) {
  return (
    <div id="side__event__pc__main__page">
      <div className="side__event__pc__main__page--frame">
        {dataSideEventPcFirts.map((item, index) => {
          return (
            <div className="side__event__pc__main__page__frame--items" key={index}>
              <div className="side__event__pc__main__page__frame__items--img"><img width={'100%'} height={'100%'} src={item.img} alt="" /></div>
              <div className="side__event__pc__main__page__frame__items--title">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(SideEventPcMainPage);
