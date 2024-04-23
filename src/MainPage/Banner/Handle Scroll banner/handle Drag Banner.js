import { handleWhenUserClickDotsBanner } from "./handle When User Click dots";

function handleWhenUserDragBanner() {
  const getAllBannersImg = document.querySelectorAll(
    ".banner__main__page__box__banner--img"
  );
  const boxFrameBannersLocation = document.querySelector('.banner__main__page__box--frame-banner')
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
        ".banner__main__page__box__dots--item"
      );
    handleWhenUserClickDotsBanner(getAllDotsItems[item])
}

export { handleWhenUserDragBanner };
