class HandleNavigationResultItemsSortby {
  rename(requestion) {
    const titlePrice = document.querySelector('.result__search__items__page__items__need__search__body__navigations__options__price--title')
    const textPrice = document.querySelector('.result__search__items__page__items__need__search__body__navigations__options__price__title--text')
    const itemsActive = document.querySelector('.result__search__items__page__items__need__search__body__navigations__options__price__dropdown__items--active')
    titlePrice?.classList.remove("result__search__items__page__items__need__search__body__navigations__options__price--active")
    textPrice?.classList.remove('result__search__items__page__items__need__search__body__navigations__options__price__title__text--exchange')
    itemsActive?.classList.remove('result__search__items__page__items__need__search__body__navigations__options__price__dropdown__items--active')
    const active =
      "result__search__items__page__items__need__search__body__navigations__options__btn--active";
    const btnActiveCurrent = document.querySelector(`.${active}`);
    btnActiveCurrent?.classList.remove(active);
    const tagItem = requestion.tag;
    requestion.tag.classList.add(active);
    const query = window.location.search.replace(
      requestion.query,
      tagItem.getAttribute("name")
    );
    const queryHavenSortby =
      window.location.search + `&sortby=${tagItem.getAttribute("name")}`;
    const navigationNeedUse = !!requestion.query ? query : queryHavenSortby;
    requestion.navigation(navigationNeedUse);
  }
  price(requestion) { 
    const btnActiveOther= document.querySelector(`.result__search__items__page__items__need__search__body__navigations__options__btn--active`);
    btnActiveOther?.classList.remove('result__search__items__page__items__need__search__body__navigations__options__btn--active');
    const active =
    "result__search__items__page__items__need__search__body__navigations__options__price__dropdown__items--active";
    const btnActiveCurrent = document.querySelector(`.${active}`);
    btnActiveCurrent?.classList.remove(active);
    const tagItem = requestion.tag;
    requestion.tag.classList.add(active);
    const query = window.location.search.replace(
      requestion.query,
      tagItem.getAttribute("name")
    );
    const titlePrice = document.querySelector('.result__search__items__page__items__need__search__body__navigations__options__price--title')
    const textPrice = document.querySelector('.result__search__items__page__items__need__search__body__navigations__options__price__title--text')
    titlePrice.classList.add("result__search__items__page__items__need__search__body__navigations__options__price--active")
    textPrice.classList.add('result__search__items__page__items__need__search__body__navigations__options__price__title__text--exchange')
    textPrice.innerHTML =  requestion.tag.innerHTML
    const queryHavenSortby =
      window.location.search + `&sortby=${tagItem.getAttribute("name")}`;
    const navigationNeedUse =!!requestion.query? query : queryHavenSortby;
    requestion.navigation(navigationNeedUse);
  }
}

export default new HandleNavigationResultItemsSortby();
