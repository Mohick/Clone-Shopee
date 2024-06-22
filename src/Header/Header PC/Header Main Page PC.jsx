import { Link } from "react-router-dom";
import "./Header Pc Max-width 600px.css";
import "./Header PC Min-width 1000px.css";
import IconLogoShopee from "../../Container  Component  SVG ICON/Icon Logo Shopee";
import InputSearchHeader from "../Input Search/Input Search";
import TopSearchHeader from "../Top Search/Top Search";
import Shopping from "../Shopping/Shopping";
import HeaderInfoShopee from "./header__info";
function HeaderPCMainPage() {
  return (
    <>
      <div id="header__pc__main__page">
      <HeaderInfoShopee />
        <div className="header__pc__main__page--layout layout">
          <div className="header__pc__main__page__box--logo-shopping-search">
            <Link to={"/"} className="header__pc__main__page--logo">
              <IconLogoShopee width={"100%"} height={"5rem"} fill={"#fff"} />
            </Link>
            <div className="header__pc__main__page__box--search">
              <InputSearchHeader />
              <div className="header__pc__main__page__box__search--last">
                <TopSearchHeader />
              </div>
            </div>
            <Shopping className="header__pc__main__page__box--icons" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPCMainPage;
