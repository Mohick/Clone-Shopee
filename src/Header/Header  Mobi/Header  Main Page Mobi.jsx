import "./Header  Main Page Mobi Max-width 600px.css";
import "./Header  Main Page Mobi Min-width 1000px.css";
import InputSearchHeader from "../Input Search/Input Search";
import Shopping from "../Shopping/Shopping";
import BannerShopee from "../../Library Banner/Banner Shopee";
function HeaderMainPageMobi() {

  return (
    <div id="header__main__page__mobi">
     <div className="header__main__page__mobi--slider">
     <BannerShopee url={'https://run.mocky.io/v3/498c1915-de64-426a-9f0b-38cb9099ddd0'} classItems={'bannerMobiPC'}/>
     </div>
      <div className="header__main__page__mobi--layout layout">
        <div className="header__main__page__mobi--box--cpm--search">
          <InputSearchHeader />
        </div>
        <div className="header__main__page__mobi--box--info">
          <Shopping />
        <div className="header__main__page__mobi__box--img">
          <img width={"100%"} src="./Image User/User.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMainPageMobi;
