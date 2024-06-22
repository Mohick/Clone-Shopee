import { Link } from "react-router-dom";
import "./Header Pc Max-width 600px.css";
import "./Header PC Min-width 1000px.css";
import IconFacebook from "../../Container  Component  SVG ICON/Icon Facebook";
import IconIntargram from "../../Container  Component  SVG ICON/Icon Intargram";
import IconBell from "../../Container  Component  SVG ICON/Icon Bell";
import IconQuestion from "../../Container  Component  SVG ICON/Icon Question";
import IconAngleDown from "../../Container  Component  SVG ICON/Icon Angle Down";
import IconEarth from "../../Container  Component  SVG ICON/Icon Earth";
import { getNextDate } from "./End Date  Product";

function HeaderInfoShopee() {
  return (
    <div className="HeaderInfoShopee"> 
      <div className="layout">
        <div className="header__pc__main__page--navigation">
          <div className="header__pc__main__page__navigation--info">
            <Link
              className="header__pc__main__page__navigation__info--title header__pc__main__page__navigation__info__title--barColumn"
              to={"/seller centre"}
            >
              Seller Centre
            </Link>
            <Link
              className="header__pc__main__page__navigation__info--title header__pc__main__page__navigation__info__title--barColumn"
              to={"/download"}
            >
              Download
              <div
                className="header__pc__main__page__navigation__info__title--dropdown"
                onClick={(e) => e.preventDefault()}
              >
                <div
                  to={"/download-qr"}
                  className="header__pc__main__page__navigation__info__title__dropdown--imgQR"
                >
                  <img
                    width={"100%"}
                    src="./Code QR And Place DownLoad App/QR code.png"
                    alt=""
                  />
                </div>
                <div className="header__pc__main__page__navigation__info__title__dropdown--siteApp">
                  <div
                    to={"/download-app store"}
                    className="header__pc__main__page__navigation__info__title__dropdown__siteApp--img"
                  >
                    <img
                      width={"100%"}
                      src="./Code QR And Place DownLoad App/App Store.png"
                      alt=""
                    />
                  </div>
                  <div
                    to={"/download-ch play"}
                    className="header__pc__main__page__navigation__info__title__dropdown__siteApp--img"
                  >
                    <img
                      width={"100%"}
                      src="./Code QR And Place DownLoad App/CH Play.png"
                      alt=""
                    />
                  </div>
                  <div
                    to={"/download-appGallery"}
                    className="header__pc__main__page__navigation__info__title__dropdown__siteApp--img"
                  >
                    <img
                      width={"100%"}
                      src="./Code QR And Place DownLoad App/AppGallery.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              className="header__pc__main__page__navigation__info--title"
              to={"/follow us on"}
            >
              Follow us on
            </Link>
            <div className="header__pc__main__page__navigation__info__box--icon">
              <Link
                to={"/facebook"}
                className="header__pc__main__page__navigation__info--icon"
              >
                <IconFacebook />
              </Link>
              <Link className="header__pc__main__page__navigation__info--icon">
                <IconIntargram />
              </Link>
            </div>
          </div>
          <div className="header__pc__main__page__navigation--info">
            <Link
              to={"/notification"}
              className="header__pc__main__page__navigation__info__box--notification"
            >
              <div className="header__pc__main__page__navigation__info__notification--icon">
                <IconBell />
              </div>
              <div className="header__pc__main__page__navigation__info__notification--title">
                notification
              </div>
              <div
                className="header__pc__main__page__navigation__info__notification--dropdown"
                onClick={(e) => e.preventDefault()}
              >
                <div className="header__pc__main__page__navigation__info__notification__dropdown--title">
                  recently received notifications
                </div>
                <div className="header__pc__main__page__navigation__info__notification__dropdown--content">
                  <Link className="header__pc__main__page__navigation__info__notification__dropdown__content--voucher">
                    <div className="header__pc__main__page__navigation__info__notification__dropdown__content__voucher--image">
                      <img
                        width={"100%"}
                        src="./Image Notfication/voucher notification.jpg"
                        alt=""
                      />
                    </div>
                    <div className="header__pc__main__page__navigation__info__notification__dropdown__content__voucher--text">
                      <div className="header__pc__main__page__navigation__info__notification__dropdown__content__voucher__text--title">
                        Voucher Mall 300k Sắp hết dạng xử dụng !
                      </div>
                      <div className="header__pc__main__page__navigation__info__notification__dropdown__content__voucher__text--description">
                        Voucher 300k đơn ShopeeMall sẽ hết hạng vào{" "}
                        {getNextDate()} ! Xài ngay nha !
                      </div>
                    </div>
                  </Link>
                  <Link className="header__pc__main__page__navigation__info__notification__dropdown__content--freeShip">
                    <div className="header__pc__main__page__navigation__info__notification__dropdown__content__freeShip--image">
                      <img
                        width={"100%"}
                        src="./Image Notfication/free ship logo.png"
                        alt=""
                      />
                    </div>
                    <div className="header__pc__main__page__navigation__info__notification__dropdown__content__freeShip--text">
                      <div className="header__pc__main__page__navigation__info__notification__dropdown__content__freeShip__text--title">
                        Tặng Bạn 01 mã khuyến mãi free ship cho đơn từ 0Đ !
                      </div>
                      <div className="header__pc__main__page__navigation__info__notification__dropdown__content__freeShip__text--description">
                        Mã Giảm Giá Sẽ Kết Thúc vào {getNextDate()} Siêu giảm
                        giá , sale linh đình Dùng Ngay Thôi
                      </div>
                      <div className="header__pc__main__page__navigation__info__notification__dropdown__content__freeShip__text--banner">
                        <img
                          width={"100%"}
                          src="./Image Notfication/free ship baner.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={"/help"}
              className="header__pc__main__page__navigation__info__box--help"
            >
              <div className="header__pc__main__page__navigation__info__help--icon">
                <IconQuestion />
              </div>
              <div className="header__pc__main__page__navigation__info__help--title">
                Help
              </div>
              <div className="header__pc__main__page__navigation__info__help--dropdown"></div>
            </Link>
            <Link className="header__pc__main__page__navigation__info__box--language">
              <div className="header__pc__main__page__navigation__info__language--icon">
                <IconEarth />
              </div>
              <div className="header__pc__main__page__navigation__info__language--title">
                English
              </div>
              <div className="header__pc__main__page__navigation__info__language--icon">
                <IconAngleDown />
              </div>
              <div className="header__pc__main__page__navigation__info__language--dropdown ">
                <Link className="header__pc__main__page__navigation__info__language__dropdown--option header__pc__main__page__navigation__info__language__dropdown__option--active">
                  English
                </Link>
                <Link className="header__pc__main__page__navigation__info__language__dropdown--option">
                  Tiếng Việt
                </Link>
              </div>
            </Link>
            <Link
              to={"/profiles"}
              className="header__pc__main__page__navigation__info__box--profiles"
            >
              <div className="header__pc__main__page__navigation__info__profiles--img">
                <img width={"100%"} src="./Image User/User.png" alt="" />
              </div>
              <div className="header__pc__main__page__navigation__info__profiles--title">
                phnhn762
              </div>
              <div className="header__pc__main__page__navigation__info__profiles--dropdown">
                <Link className="header__pc__main__page__navigation__info__profiles__dropdown--option">
                  My Account
                </Link>
                <Link className="header__pc__main__page__navigation__info__profiles__dropdown--option">
                  My purchase
                </Link>
                <Link className="header__pc__main__page__navigation__info__profiles__dropdown--option">
                  Logout
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfoShopee;
