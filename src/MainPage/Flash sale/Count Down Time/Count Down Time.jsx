import { useEffect } from "react";
import "./Count Down Time Max-width 600px.css";
import HandleCountDownTimeMainPage from "./Handle Count Flash Sale/handle count flash sale";

function CountDownTimeFlashSale() {
  useEffect(() => {
    const houre = setInterval(() => {
      HandleCountDownTimeMainPage.handleHoursSeccondTime();
    }, 1000);
    const minutes = setInterval(() => {
      HandleCountDownTimeMainPage.currentMinuteFirstTime();
    }, 1000);
    const seconds = setInterval(() => {
      HandleCountDownTimeMainPage.currentSecondsTime();
    }, 1000);

    return () => {
      clearInterval(houre);
      clearInterval(minutes);
      clearInterval(seconds);
      
    };
  }, []);
  return (
    <>
      <div className="flash__sale__time--houre">
        <div className="flash__sale__time__hours--seccond">
          <div className="flash__sale__time__houre__seccond--body">
            <div className="flash__sale__time__houre__seccond--number">1</div>
            <div className="flash__sale__time__houre__seccond--number">0</div>
          </div>
        </div>
        <div className="flash__sale__time__hours--first">
          <div className="flash__sale__time__houre__first--body">
            <div className="flash__sale__time__houre__first--number">1</div>
            <div className="flash__sale__time__houre__first--number">0</div>
            <div className="flash__sale__time__houre__first--number">9</div>
            <div className="flash__sale__time__houre__first--number">8</div>
            <div className="flash__sale__time__houre__first--number">7</div>
            <div className="flash__sale__time__houre__first--number">6</div>
            <div className="flash__sale__time__houre__first--number">5</div>
            <div className="flash__sale__time__houre__first--number">4</div>
            <div className="flash__sale__time__houre__first--number">3</div>
            <div className="flash__sale__time__houre__first--number">2</div>
            <div className="flash__sale__time__houre__first--number">1</div>
            <div className="flash__sale__time__houre__first--number">0</div>
          </div>
        </div>
      </div>
      <div className="flash__sale__time--minute">
        <div className="flash__sale__time__minute--seccond">
          <div className="flash__sale__time__minute__seccond--body">
            <div className="flash__sale__time__minute__seccond--number">5</div>
            <div className="flash__sale__time__minute__seccond--number">4</div>
            <div className="flash__sale__time__minute__seccond--number">3</div>
            <div className="flash__sale__time__minute__seccond--number">2</div>
            <div className="flash__sale__time__minute__seccond--number">1</div>
            <div className="flash__sale__time__minute__seccond--number">0</div>
          </div>
        </div>
        <div className="flash__sale__time__minute--first">
          <div className="flash__sale__time__minute__first--body">
            <div className="flash__sale__time__minute__first--number">9</div>
            <div className="flash__sale__time__minute__first--number">8</div>
            <div className="flash__sale__time__minute__first--number">7</div>
            <div className="flash__sale__time__minute__first--number">6</div>
            <div className="flash__sale__time__minute__first--number">5</div>
            <div className="flash__sale__time__minute__first--number">4</div>
            <div className="flash__sale__time__minute__first--number">3</div>
            <div className="flash__sale__time__minute__first--number">2</div>
            <div className="flash__sale__time__minute__first--number">1</div>
            <div className="flash__sale__time__minute__first--number">0</div>
          </div>
        </div>
      </div>
      <div className="flash__sale__time--seconds">
        <div className="flash__sale__time__seconds--seccond">
          <div className="flash__sale__seconds__seccond--body">
            <div className="flash__sale__time__seconds__seccond--number">5</div>
            <div className="flash__sale__time__seconds__seccond--number">4</div>
            <div className="flash__sale__time__seconds__seccond--number">3</div>
            <div className="flash__sale__time__seconds__seccond--number">2</div>
            <div className="flash__sale__time__seconds__seccond--number">1</div>
            <div className="flash__sale__time__seconds__seccond--number">0</div>
          </div>
        </div>
        <div className="flash__sale__time__seconds--first">
          <div className="flash__sale__time__seconds__first--body">
            <div className="flash__sale__time__seconds__first--number">9</div>
            <div className="flash__sale__time__seconds__first--number">8</div>
            <div className="flash__sale__time__seconds__first--number">7</div>
            <div className="flash__sale__time__seconds__first--number">6</div>
            <div className="flash__sale__time__seconds__first--number">5</div>
            <div className="flash__sale__time__seconds__first--number">4</div>
            <div className="flash__sale__time__seconds__first--number">3</div>
            <div className="flash__sale__time__seconds__first--number">2</div>
            <div className="flash__sale__time__seconds__first--number">1</div>
            <div className="flash__sale__time__seconds__first--number flash__sale__time__seconds__first--end--count--down">0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDownTimeFlashSale;
