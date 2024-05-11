import "./Footer Certificate Max-width 600px.css";
import "./Footer Certificate Min-width 600px.css";
import "./Footer Certificate Min-width 1000px.css";
function FooterCertificate() {
  return (
    <div id="footer__certificate">
      <div className="footer__certificate--layout layout">
        <div className="footer__certificate--items">
          <img  src="./policy/lock.png" alt="" />

          <span className="footer__certificate__items--title">
            PRIVACY POLICY
          </span>
        </div>
        <div className="footer__certificate--items">
          <img
          
            src="./policy/serviced.png"
            alt=""
          />

          <span className="footer__certificate__items--title">
            TERMS OF SERVICE
          </span>
        </div>
        <div className="footer__certificate--items">
          <img  src="./policy/car.png" alt="" />

          <span className="footer__certificate__items--title">
            CHÍNH SÁCH VẬN CHUYỂN
          </span>
        </div>
        <div className="footer__certificate--items">
          <img
          
            src="./policy/volumn.png"
            alt=""
          />

          <span className="footer__certificate__items--title">
            CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterCertificate;
