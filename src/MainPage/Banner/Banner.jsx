import { useEffect, useState } from "react";
import "./Banner Min-width 1000px.css";
import IconAngleLeft from "../../Container  Component  SVG ICON/Icon Angle Left";
import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import axios from "axios";
import { handleWhenUserClickDotsBanner } from "./Handle Scroll banner/handle When User Click dots";
import { handleWhenUserClickArrow } from "./Handle Scroll banner/handle Arrow Banner";
import { handleWhenUserDragBanner } from "./Handle Scroll banner/handle Drag Banner";
function BannerMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;
    if (allow) {
      axios
        .get("https://run.mocky.io/v3/d88c8bff-4820-4a79-b988-64207da8bfab")
        .then((res) => {
          setItems(res.data);
        });

        const getCOntainerBanner = document.querySelector(".banner__main__page__box--banner")
        getCOntainerBanner.addEventListener('scrollend', () => {
            handleWhenUserDragBanner()
        })
    }
    return () => {

      return (allow = false);
    };
  }, []);
  return (
    <div id="banner__main__page">
      <div className="banner__main__page--layout layout">
        <div className="banner__main__page__box--frame-banner">
          <div className="banner__main__page__box--banner">
            <div className="banner__main__page__box__banner--items">
              {[...items].map((item, index) => {
                if (index == 0) {
                  return (
                    <div
                      key={index}
                      data-index={`${index}`}
                      current-index="0"
                      className="banner__main__page__box__banner--img"
                    >
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={`${item.url}`}
                        alt=""
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      data-index={`${index}`}
                      className="banner__main__page__box__banner--img"
                    >
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={`${item.url}`}
                        alt=""
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="banner__main__page__box--arrow">
            <div
              className="banner__main__page__box__arrow--left"
              onClick={(e) => handleWhenUserClickArrow("prev")}
            >
              <IconAngleLeft />
            </div>
            <div
              className="banner__main__page__box__arrow--right"
              onClick={(e) => handleWhenUserClickArrow("next")}
            >
              <IconAngleRight />
            </div>
          </div>
          <div className="banner__main__page__box--dots">
            {[...items].map((item, index) => {
              if (index == 0) {
                return (
                  <div
                  key={index}
                    onClick={(e) => handleWhenUserClickDotsBanner(e.target)}
                    className="banner__main__page__box__dots--item  banner__main__page__box__dots__item--active"
                    data-index={index}
                    current-index={index}
                  ></div>
                );
              } else {
                return (
                  <div
                  key={index}
                    onClick={(e) => handleWhenUserClickDotsBanner(e.target)}
                    className="banner__main__page__box__dots--item"
                    data-index={index}
                  ></div>
                );
              }
            })}
          </div>
        </div>
        <div>
          <div className="banner__main__page__box__banner--img">
            <img
              width={"100%"}
              src="https://cf.shopee.vn/file/vn-50009109-b6a39e92f1b77d72cf0a6c6382f79d9b_xxhdpi"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerMainPage;
