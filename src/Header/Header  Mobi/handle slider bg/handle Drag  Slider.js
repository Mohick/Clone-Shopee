import { handleWhenUserClickDotsSliderMobi } from "./handle When User Click dots";

function handleWhenUserDragSliderHeaderMobi() {
  const getAllBannersImg = document.querySelectorAll(
    ".header__main__page__mobi__slider__box__banner--img"
  );
  const boxFrameBannersLocation = document.querySelector('.header__main__page__mobi__slider__box--frame-banner')
  const obLocationsImgBanners = [];
  getAllBannersImg.forEach((item,index) => {
    const spaceOfAllBannerWithFrameBanners = Math.floor(item.getBoundingClientRect().left - boxFrameBannersLocation.getBoundingClientRect().left);
    const items = { indexItem: index , locationsCurrent:spaceOfAllBannerWithFrameBanners};
    obLocationsImgBanners.push(items);
  });
  
  const sortIncreadings = obLocationsImgBanners.sort((a,b) =>{
    return a.locationsCurrent - b.locationsCurrent;
  })

  const halfFrameBanner = -(boxFrameBannersLocation.clientWidth / 2)
  for (let index = 0; index < sortIncreadings.length; index++) {
    if(sortIncreadings[index].locationsCurrent > halfFrameBanner) {
        CallRelocalDots(sortIncreadings[index].indexItem)
        return;
    }
    
}
}

function CallRelocalDots(item) {
    const getAllDotsItems = document.querySelectorAll(
        ".header__main__page__mobi__slider__box__dots--item"
      );
      handleWhenUserClickDotsSliderMobi(getAllDotsItems[item])
}

export { handleWhenUserDragSliderHeaderMobi };
