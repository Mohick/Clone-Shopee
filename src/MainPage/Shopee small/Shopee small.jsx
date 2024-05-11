import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import IconBorderCheck from "../../Container  Component  SVG ICON/Icon Border Check";
import BannerShope from "../../Library Banner/Banner Shopee";
import ShopeeSmallItemsMainPage from "./Shopee Small Items/Shopee Small Items";
import "./Shopee small Max-width 600px.css";
import './Shopee Small Min-width 900px.css'
import "./Shopee small Min-width 1000px.css";

function ShopeeSmallMainPage() {
  return (
    <div id="shopee__small">
      <div className="shopee__small--layout layout">
        <div className="shopee__small--header">
          <div className="shopee__small__header__box--title">
            <div className="shopee__small__header--title">SHOPEE MALL</div>
            <div className="shopee__small__header--navigations">
              <div className="shopee__small__header__navigations--items">
                <div className="shopee__small__header__navigations__items--icon">
                  <img
                    loading="lazy"
                    width={"100%"}
                    height={"100%"}
                    src="./Img Shopee small/return product.png"
                    alt=""
                  />
                </div>
                <div className="shopee__small__header__navigations__items--name">
                  7 Days Return
                </div>
              </div>
              <div className="shopee__small__header__navigations--items">
                <div className="shopee__small__header__navigations__items--icon">
                  <img
                    loading="lazy"
                    width={"100%"}
                    height={"100%"}
                    src="./Img Shopee small/secure.png"
                    alt=""
                  />
                </div>
                <div className="shopee__small__header__navigations__items--name">
                  100% Authentic
                </div>
              </div>
              <div className="shopee__small__header__navigations--items">
                <div className="shopee__small__header__navigations__items--icon">
                  <img
                    loading="lazy"
                    width={"100%"}
                    height={"100%"}
                    src="./Img Shopee small/ship.png"
                    alt=""
                  />
                </div>
                <div className="shopee__small__header__navigations__items--name">
                  Free Shipping
                </div>
              </div>
            </div>
            <div className="shopee__small__header__box--views--more">
              <div className="shopee__small__header__box__views__more--title">
                see more
              </div>
              <div className="shopee__small__header__box__views__more--icon">
                <IconAngleRight width={"10"} height={"10"} fill={"#ccc"} />
              </div>
            </div>
          </div>
          <div className="shopee__small--navigations">
            <div className="shopee__small__navigations--items">
              <div className="shopee__small__navigations__items--icon">
                <IconBorderCheck width={"10"} />
              </div>
              <div className="shopee__small__navigations__items--title">
                {" "}
                Miễn phí trả hàng
              </div>
            </div>
            <div className="shopee__small__navigations--items">
              <div className="shopee__small__navigations__items--icon">
                <IconBorderCheck width={"10"} />
              </div>
              <div className="shopee__small__navigations__items--title">
                Chính hãng 100%{" "}
              </div>
            </div>
            <div className="shopee__small__navigations--items">
              <div className="shopee__small__navigations__items--icon">
                <IconBorderCheck width={"10"} />
              </div>
              <div className="shopee__small__navigations__items--title">
                Giao miễn phí
              </div>
            </div>
          </div>
        </div>
        <div className="shopee__small--body">
          <div className="shopee__small__body--banner">
          <BannerShope
            url={"https://run.mocky.io/v3/24ca186f-cb3a-4a2f-8cf8-8f65370e91ec"} classItems={'small'}
          />
          </div>
          <ShopeeSmallItemsMainPage />
        </div>
      </div>
    </div>
  );
}

export default ShopeeSmallMainPage;
