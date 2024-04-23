function handleWhenUserClickDotsSliderMobi(tag) {
  const getAllDotsItems = document.querySelectorAll(
    ".header__main__page__mobi__slider__box__dots--item"
  );

  getAllDotsItems.forEach((item, index) => {
    if (!!item.getAttribute("current-index")) {
      item.removeAttribute("current-index");
      item.classList.remove('header__main__page__mobi__slider__box__dots__item--active')
      return;
    }
  });
  const getFrameBannerImg = document.querySelector('.header__main__page__mobi__slider__box--frame-banner').clientWidth
  tag.setAttribute("current-index", tag.getAttribute('data-index'));
  tag.classList.add('header__main__page__mobi__slider__box__dots__item--active')
  const getCOntainerBanner = document.querySelector(".header__main__page__mobi__slider__box--banner")
  getCOntainerBanner.scrollTo({
    left: getFrameBannerImg * Number(tag.getAttribute('data-index')),
    behavior: 'smooth' 
});
}

export { handleWhenUserClickDotsSliderMobi };
