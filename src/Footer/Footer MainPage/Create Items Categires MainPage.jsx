import { memo } from "react";
import "./Footer MainPage Max-width 600px.css";
import "./Footer MainPage Min-width 1000px.css";
function CreateItemsCategiresMainPage({ title, content }) {
  return (
    <div className="footer__main__page__categories__body__col--items">
      <div className="footer__main__page__categories__body__col__items--title">
        {title}
      </div>
      <div className="footer__main__page__categories__body__col__items--cotent">
        {content.map((item, index) => {
          return (
            <div
              key={index}
              className="footer__main__page__categories__body__col__items__cotent--options"
            >
              <div className="footer__main__page__categories__body__col__items__cotent__options--text">
                {item.option}
              </div>
              <div className="footer__main__page__categories__body__col__items__cotent__options--bar">
                |
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(CreateItemsCategiresMainPage);
