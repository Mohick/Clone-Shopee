class HandleCountDownTimeMainPage {
  async handleRelocalNumber(scrollTime, classBody, classNumber) {
    const boxItemsScroll = document.querySelector(scrollTime);
    boxItemsScroll.addEventListener("scroll", () => {
      const bodyOfItems = document.querySelector(classBody);
      const firstItem = document.querySelector(classNumber);
      bodyOfItems.appendChild(firstItem);
    });
  }

  async handleHoursSeccondTime() {
    const cpmtTime = new Date();
    const hours = cpmtTime.getHours();
    const boxSeccondHours = document.querySelector(
      ".flash__sale__time__hours--seccond"
    );
    const boxFirstHours = document.querySelector(
      ".flash__sale__time__hours--first"
    );
    switch (!!cpmtTime) {
      case Math.floor(hours) >= 12:
        const transferTime = Math.abs(hours - 12);
        if (transferTime <= 1 ) {
          boxSeccondHours.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          boxFirstHours.scrollTo({
            top: boxFirstHours.clientHeight * Math.abs(transferTime),
            behavior: "smooth",
          });
          break;
        } else {

          boxSeccondHours.scrollTo({
            top: boxFirstHours.clientHeight * 2,
            behavior: "smooth",
          });
          boxFirstHours.scrollTo({
            top: boxFirstHours.clientHeight * Math.abs(transferTime),
            behavior: "smooth",
          });
          break;
        }

      case Math.floor(hours) < 12:
        const currentTime =  Math.floor(hours);
        if (currentTime <= 1) {
          boxSeccondHours.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          boxFirstHours.scrollTo({
            top: boxFirstHours.clientHeight * Math.abs(currentTime),
            behavior: "smooth",
          });

          break;
        } else {
          boxSeccondHours.scrollTo({
            top: boxFirstHours.clientHeight * 2,
            behavior: "smooth",
          });
          boxFirstHours.scrollTo({
            top: boxFirstHours.clientHeight * Math.abs(currentTime),
            behavior: "smooth",
          });

          break;
        }
    }
  }
  async currentSecondsTime() {
    const boxFirstSeconds = document.querySelector(
      ".flash__sale__time__seconds--first"
    );
    const boxSeccondSeconds = document.querySelector(
      ".flash__sale__time__seconds--seccond"
    );

    const clientHeightShowItems = boxFirstSeconds.clientHeight;
    const seccondCurrent = new Date().getSeconds();
    const transferString = JSON.stringify(seccondCurrent).trim();
    const getLastNumberSeconds = transferString.slice(-1);
    const getFirstNumberSeconds = transferString.slice(0, 1);
    switch (transferString.length) {
      case 1:
        boxFirstSeconds.scrollTo({
          top: clientHeightShowItems * Number(getLastNumberSeconds),
          behavior: "smooth",
        });
        boxSeccondSeconds.scrollTo({
          top: clientHeightShowItems * 0,
          behavior: "smooth",
        });
        
        break;
      case 2:
        boxFirstSeconds.scrollTo({
          top: clientHeightShowItems * Number(getLastNumberSeconds),
          behavior: "smooth",
        });
        boxSeccondSeconds.scrollTo({
          top: clientHeightShowItems * Number(getFirstNumberSeconds),
          behavior: "smooth",
        });
        break;
    }
  }
  async currentMinuteFirstTime() {
    const boxFirstSeconds = document.querySelector(
      ".flash__sale__time__minute--first"
    );
    const boxSeccondSeconds = document.querySelector(
      ".flash__sale__time__minute--seccond"
    );
    const clientHeightShowItems = boxFirstSeconds.clientHeight;
    const seccondCurrent = new Date().getMinutes();
    const transferString = JSON.stringify(seccondCurrent).trim();
    const getLastNumberSeconds = transferString.slice(-1);
    const getFirstNumberSeconds = transferString.slice(0, 1);
    switch (transferString.length) {
      case 1:
        boxFirstSeconds.scrollTo({
          top: clientHeightShowItems * Number(getFirstNumberSeconds),
          behavior: "smooth",
        });
        boxSeccondSeconds.scrollTo({
          top: clientHeightShowItems * 0,
          behavior: "smooth",
        });
        break;
      case 2:
        boxFirstSeconds.scrollTo({
          top: clientHeightShowItems * Number(getLastNumberSeconds),
          behavior: "smooth",
        });
        boxSeccondSeconds.scrollTo({
          top: clientHeightShowItems * Number(getFirstNumberSeconds),
          behavior: "smooth",
        });
        break;
    }
  }
 
}

export default new HandleCountDownTimeMainPage();
