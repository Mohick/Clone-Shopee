function handleSideEventMainPage() {
  const boxFrameScroll = document.querySelector(".side__event__mobi__main__page--items");
  const boxDivItems = document.querySelector(
    ".side__event__mobi__main__page__items--first"
  );
  
  const sizeOfSCroll = boxFrameScroll.scrollWidth - boxFrameScroll.clientWidth
  const locationsCurrent = Math.abs(Math.floor(boxDivItems.getBoundingClientRect().left - boxFrameScroll.getBoundingClientRect().left))
  
  const thumbBar = document.querySelector(".side__event__mobi__main__page__scroll__box--bar")
  thumbBar.style.width = `${(locationsCurrent/sizeOfSCroll)*100}%`
}

export { handleSideEventMainPage };
