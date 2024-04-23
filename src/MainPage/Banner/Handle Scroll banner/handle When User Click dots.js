function handleWhenUserClickDotsBanner(tag) {
  const getAllDotsItems = document.querySelectorAll(
    ".banner__main__page__box__dots--item"
  );

  getAllDotsItems.forEach((item, index) => {
    if (!!item.getAttribute("current-index")) {
      item.removeAttribute("current-index");
      item.classList.remove('banner__main__page__box__dots__item--active')
      return;
    }
  });
  const getFrameBannerImg = document.querySelector('.banner__main__page__box--frame-banner').clientWidth
  tag.setAttribute("current-index", tag.getAttribute('data-index'));
  tag.classList.add('banner__main__page__box__dots__item--active')
  const getCOntainerBanner = document.querySelector(".banner__main__page__box--banner")
  getCOntainerBanner.scrollTo({
    left: getFrameBannerImg * Number(tag.getAttribute('data-index')),
    behavior: 'smooth' 
});
}

export { handleWhenUserClickDotsBanner };
