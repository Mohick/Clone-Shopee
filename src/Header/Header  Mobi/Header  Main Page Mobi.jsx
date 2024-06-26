import "./Header  Main Page Mobi Max-width 600px.css";
import "./Header  Main Page Mobi Min-width 600px.css";
import "./Header  Main Page Mobi Min-width 1000px.css";
import InputSearchHeader from "../Input Search/Input Search";
import BannerShopee from "../../Library Banner/Banner Shopee";
import Shopping from "../Shopping/Shopping";
function HeaderMainPageMobi() {

  return (
    <div id="header__main__page__mobi">
     <div className="header__main__page__mobi--slider">
     <BannerShopee url={'https://json-be-shopee.onrender.com/api__banner__side__event'} classItems={'bannerMobiPC'}/>
     </div>
      <div className="header__main__page__mobi--layout layout">
        <div className="header__main__page__mobi--box--cpm--search">
          <InputSearchHeader />
        </div>
        <div className="header__main__page__mobi--box--info">
          <Shopping className="header__main__page__mobi__box__info--icons"/>
        <div className="header__main__page__mobi__box--img">
          <img width={"100%"} src="./Image User/User.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMainPageMobi;
