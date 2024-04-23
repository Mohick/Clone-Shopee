import "./Header  Main Page Mobi Max-width 600px.css";
import "./Header  Main Page Mobi Min-width 1000px.css";
import InputSearchHeader from "../Input Search/Input Search";
import Shopping from "../Shopping/Shopping";
import { useEffect } from "react";
function HeaderMainPageMobi() {

  return (
    <div id="header__main__page__mobi">
      <div className="header__main__page__mobi--layout layout">
          <InputSearchHeader/>
          <Shopping/>
        <div className="header__main__page__mobi__box--img">
          <img width={"100%"} src="./Image User/User.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMainPageMobi;
