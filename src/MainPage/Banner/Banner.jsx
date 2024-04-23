import { useEffect, useState } from "react";
import "./Banner Max-width 600px.css";
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
    const autoNextBanner = setInterval(()=>{
      handleWhenUserClickArrow('next')
    },3000)
    let allow = true;
    if (allow) {
      axios
        .get("https://run.mocky.io/v3/6e2f2c47-2e2b-48b6-9e78-1d6e072271f5")
        .then((res) => {
          setItems(res.data);
        });

      const getCOntainerBanner = document.querySelector(
        ".banner__main__page__box--banner"
      );
      getCOntainerBanner.addEventListener("scrollend", () => {
        handleWhenUserDragBanner();
      });
    }
    return () => {
      clearInterval(autoNextBanner)
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
        <div className="banner__main__page__box--frame-side-event">
          <div className="banner__main__page__box__frame_side_event--img">
            <img
              width={"100%"}
              height={'100%'}
              src="./Main Page Site Event/side event 1.jpg"
              alt=""
            />
          </div>
          <div className="banner__main__page__box__frame_side_event--img">
            <img
              width={"100%"}
              height={'100%'}
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
