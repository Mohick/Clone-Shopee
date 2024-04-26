import axios from "axios";
import { useEffect, useState } from "react";
import'./Header  Main Page Mobi Max-width 600px.css'
import'./Header  Main Page Mobi Min-width 600px.css'
import { handleWhenUserDragSliderHeaderMobi } from "./handle slider bg/handle Drag  Slider";
import { handleWhenUserClickDotsSliderMobi } from "./handle slider bg/handle When User Click dots";
import { handleWhenUserClickArrowSliderMobi } from "./handle slider bg/handle Arrow slider";
function BgSliderHeaderMobi() {
  const [items, setItems] = useState([]);
  const [ChangeSlider, setChangeSlider] = useState(0);
  useEffect(() => {
    const setNextSlider = setInterval(()=> {
        handleWhenUserClickArrowSliderMobi('next')
    },3000)
    let allow = true;
    if (allow) {
      axios
        .get("https://run.mocky.io/v3/6e2f2c47-2e2b-48b6-9e78-1d6e072271f5")
        .then((res) => {
          setItems(res.data);
        });

      const getCOntainerBanner = document.querySelector(
        ".header__main__page__mobi__slider__box--banner"
      );
      getCOntainerBanner.addEventListener("scrollend", () => {
        handleWhenUserDragSliderHeaderMobi()
        setChangeSlider(ChangeSlider + 1)
      });
    }
    return () => {
        clearInterval(setNextSlider);
      return (allow = false);
    };
  }, [ChangeSlider]);
  return (
    <div className="header__main__page__mobi--slider">
      <div className="header__main__page__mobi__slider--layout">
        <div className="header__main__page__mobi__slider__box--frame-banner">
          <div className="header__main__page__mobi__slider__box--banner">
            <div className="header__main__page__mobi__slider__box__banner--items">
              {[...items].map((item, index) => {
                if (index == 0) {
                  return (
                    <div
                      key={index}
                      data-index={`${index}`}
                      current-index="0"
                      className="header__main__page__mobi__slider__box__banner--img"
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
                      className="header__main__page__mobi__slider__box__banner--img"
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
            <div className="header__main__page__mobi__slider__box--dots">
            {[...items].map((item, index) => {
              if (index == 0) {
                return (
                  <div
                    key={index}
                    onClick={(e) => (
                        handleWhenUserClickDotsSliderMobi(e.target),
                        setChangeSlider(ChangeSlider + 1)
                    )}
                    className="header__main__page__mobi__slider__box__dots--item  header__main__page__mobi__slider__box__dots__item--active"
                    data-index={index}
                    current-index={index}
                  ></div>
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={(e) => (
                        handleWhenUserClickDotsSliderMobi(e.target),
                        setChangeSlider(ChangeSlider + 1)
                    )}
                    className="header__main__page__mobi__slider__box__dots--item"
                    data-index={index}
                  ></div>
                );
              }
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgSliderHeaderMobi;
