import { useEffect, useState } from "react";
import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import "./Daily Discover Max-width 600px.css";
import "./Daily Discover Min-width 600px.css";
import "./Daily Discover Min-width 800px.css";
import "./Daily Discover Min-width 1000px.css";
import axios from "axios";
import IconPlayVideo from "../../Container  Component  SVG ICON/Icon Play Video";
import IconSaliasingLeft from "../../Container  Component  SVG ICON/Icon Saliasing Right";
import IconSaliasingRight from "../../Container  Component  SVG ICON/Icon Saliasing Left";
import { useInView } from "react-intersection-observer";

function DailyDiscoverMainPage() {
  const [items, setItems] = useState([]);
  
  const { ref, inView } = useInView({ threshold: 0,triggerOnce: true });
  useEffect(() => {
    let allow = true;
    axios
      .get("https://run.mocky.io/v3/17b8ed9e-6b41-44d7-ac75-bf1c39fd98c9")
      .then((response) => {
        if (allow) {
          const data = response.data;
          setItems(data);
        }
      });
    const checkSizeScreen = setTimeout(() => {
      if (window.innerWidth >= 900) {
        const getHeightHeader = document.getElementById(
          "header__pc__main__page"
        ).clientHeight;
        const headerTitle = document.querySelector(
          ".daily__discover__main__page--header"
        );
        headerTitle.style.top = `${getHeightHeader}px`;
      } else {
        const headerTitle = document.querySelector(
          ".daily__discover__main__page--header"
        );
        headerTitle.style.top = `0px`;
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 900) {
          const getHeightHeader = document.getElementById(
            "header__pc__main__page"
          ).clientHeight;
          const headerTitle = document.querySelector(
            ".daily__discover__main__page--header"
          );
          headerTitle.style.top = `${getHeightHeader}px`;
        } else {
          const headerTitle = document.querySelector(
            ".daily__discover__main__page--header"
          );
          headerTitle.style.top = `0px`;
        }
      });
    }, 0);
    return () => {
      clearTimeout(checkSizeScreen);
      allow = false;
    };
  }, []);
  return (
    <div id="daily__discover__main__page">
      <div className="daily__discover__main__page--layout layout">
        <div className="daily__discover__main__page--header">
          <div className="daily__discover__main__page__header--title">
            DAILY DISCOVER
          </div>
          <div className="daily__discover__main__page__header--more">
            <div className="daily__discover__main__page__header__more--title">
              see more
            </div>
            <div
              className="daily__discover__main__page__header__more--icon"
              ref={ref}
            >
              <IconAngleRight width={"1.5rem"} height={"1.5rem"} />
            </div>
          </div>
        </div>

        <div className="daily__discover__main__page--body" ref={ref}>
          {inView
            ? items.map((item, i) => {
                return (
                  <div
                    className="daily__discover__main__page__body--item"
                    key={i}
                  >
                    <div className="daily__discover__main__page__body__item--header">
                      <div className="daily__discover__main__page__body__item__header--main--img">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src={item.url}
                          alt=""
                        />
                      </div>
                      <div className="daily__discover__main__page__body__item__header--event--img">
                        {item.checkedOne ? (
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./Daili discover/1 voucher.png"
                            alt=""
                          />
                        ) : undefined}
                        {item.checkedTwo ? (
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./Daili discover/2 voucher.png"
                            alt=""
                          />
                        ) : undefined}
                        {item.checkedThree ? (
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./Daili discover/3 voucher.png"
                            alt=""
                          />
                        ) : undefined}
                        {item.checkedFour ? (
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./Daili discover/4 voucher.png"
                            alt=""
                          />
                        ) : undefined}
                        {item.checkedFull ? (
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./Daili discover/4 voucher.png"
                            alt=""
                          />
                        ) : undefined}
                      </div>
                      <div className="daily__discover__main__page__body__item__header--status">
                        {item.small ? (
                          <img
                            width={"24px"}
                            height={"18px"}
                            src="./Daili discover/small.png"
                            alt=""
                          />
                        ) : undefined}
                        {item.like ? (
                          <img
                            width={"48px"}
                            height={"18px"}
                            src="./Daili discover/like plus.png"
                            alt=""
                          />
                        ) : undefined}
                      </div>
                      <div className="daily__discover__main__page__body__item__header--icon">
                        {item.ads ? (
                          <div className="daily__discover__main__page__body__item__header--icon--text">
                            Ad
                          </div>
                        ) : undefined}
                        {item.video ? (
                          <IconPlayVideo
                            width={"20"}
                            height={"20"}
                            fill={"none"}
                          />
                        ) : undefined}
                      </div>
                    </div>
                    <div className="daily__discover__main__page__body__item--body">
                      <div className="daily__discover__main__page__body__item--title">
                        {item.name}
                      </div>

                      <div className="daily__discover__main__page__body__item--cost--sold">
                        <div className="daily__discover__main__page__body__item--cost">
                          ₫ {item.cost}
                        </div>
                        <div className="daily__discover__main__page__body__item--sold">
                          {item.sold} sold
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : undefined}
        </div>
        <div className="daily__discover__main__page__footer">
          <div className="daily__discover__main__page__footer--title">
            See More
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyDiscoverMainPage;
