import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import CountDownTimeFlashSale from "./Count Down Time/Count Down Time";
import "./Flash sale Max-width 600px.css";
import './Flash sale Min-width 1000px.css'
import ItemsFlashSaleMainPage from "./Items Flash sale MainPage/Items Flash sale MainPage";

function FlashSale() {
  return (
    <div id="flash__sale">
      <div className="flash__sale--layout layout">
        <div className="flash__sale--header">
          <div className="flash__sale__header--time--last--sale">
            <div className="flash__sale--last--sale"></div>
            <div className="flash__sale--time">
              <CountDownTimeFlashSale />
            </div>
          </div>
          <div className="flash__sale__header--View--more">
            <div className="flash__sale__header__View__more--title">
              see all deals
            </div>
            <div className="flash__sale__header__View__more--icon">
              <IconAngleRight width={"1rem"} />
            </div>
          </div>
        </div>
        <ItemsFlashSaleMainPage />
        <div className="flash__sale--footer">
          <img width={"100%"} height={'110'} src="./Logo Flash  Sale/flash sale Banner.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
