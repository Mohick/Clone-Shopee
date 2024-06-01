class HandleNavigationResultItems {
  rename(requestion) {
    const titlePrice = document.querySelector(
      ".result__search__items__page__items__need__search__body__navigations__options__price--title"
    );
    const textPrice = document.querySelector(
      ".result__search__items__page__items__need__search__body__navigations__options__price__title--text"
    );
    const itemsActive = document.querySelector(
      ".result__search__items__page__items__need__search__body__navigations__options__price__dropdown__items--active"
    );
    titlePrice?.classList.remove(
      "result__search__items__page__items__need__search__body__navigations__options__price--active"
    );
    textPrice?.classList.remove(
      "result__search__items__page__items__need__search__body__navigations__options__price__title__text--exchange"
    );
    itemsActive?.classList.remove(
      "result__search__items__page__items__need__search__body__navigations__options__price__dropdown__items--active"
    );
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
    const btnActiveOther = document.querySelector(
      `.result__search__items__page__items__need__search__body__navigations__options__btn--active`
    );
    btnActiveOther?.classList.remove(
      "result__search__items__page__items__need__search__body__navigations__options__btn--active"
    );
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
    const titlePrice = document.querySelector(
      ".result__search__items__page__items__need__search__body__navigations__options__price--title"
    );
    const textPrice = document.querySelector(
      ".result__search__items__page__items__need__search__body__navigations__options__price__title--text"
    );
    titlePrice.classList.add(
      "result__search__items__page__items__need__search__body__navigations__options__price--active"
    );
    textPrice.classList.add(
      "result__search__items__page__items__need__search__body__navigations__options__price__title__text--exchange"
    );
    textPrice.innerHTML = requestion.tag.innerHTML;
    const queryHavenSortby =
      window.location.search + `&sortby=${tagItem.getAttribute("name")}`;
    const navigationNeedUse = !!requestion.query ? query : queryHavenSortby;
    requestion.navigation(navigationNeedUse);
  }
  btnPage(request) {
    const btnLeft = document.querySelector(
      ".result__search__items__page__items__need__search__body__locaiton__btn--prev"
    );
    const svgleft = btnLeft.querySelector("svg");
    const btnRight = document.querySelector(
      ".result__search__items__page__items__need__search__body__locaiton__btn--next"
    );
    const svgRight = btnRight.querySelector("svg");
    const lengthPage = document.querySelector(
      ".result__search__items__page__items__need__search__body__locaiton__options--current"
    );
    const activeBtn =
      "result__search__items__page__items__need__search__body__locaiton__btn--active";
    const activeIcons =
      "result__search__items__page__items__need__search__body__locaiton__btn__icon--active";
    switch (request.btn.toLowerCase()) {
      case "left":
        if (
          Number(request.query) == Number(request.minSteps) ||
          !Number(request.query)
        )
          break;
        let query;
        if (Number(request.query) - 1 <= Number(request.minSteps)) {
          query = window.location.search.replace(
            `&pages=${Number(request.query)}`,
            `&pages=${Number(request.minSteps)}`
          );
          btnLeft.classList.remove(activeBtn);
          svgleft.classList.remove(activeIcons);
          btnRight.classList.add(activeBtn);
          svgRight.classList.add(activeIcons);
          lengthPage.innerHTML = request.minSteps;
          request.navigation(query);
        } else {
          query = window.location.search.replace(
            `&pages=${Number(request.query)}`,
            `&pages=${Number(request.query) - 1}`
          );
          lengthPage.innerHTML = Number(request.query) - 1;
          request.navigation(query);
        }

        break;
      case "right":
        if (!request.query) {
          const query = window.location.search + `&pages=2`;
          btnLeft.classList.add(activeBtn);
          svgleft.classList.add(activeIcons);
          lengthPage.innerHTML = 2;
          request.navigation(query);
          if (2 >= Number(request.maxSteps)) {
            btnRight.classList.remove(activeBtn);
            svgRight.classList.remove(activeIcons);
          }
        } else {
          if (Number(request.query) == Number(request.maxSteps)) break;
          let query;
          if (Number(request.query) + 1 >= Number(request.maxSteps)) {
            query = window.location.search.replace(
              `&pages=${Number(request.query)}`,
              `&pages=${Number(request.maxSteps)}`
            );
            lengthPage.innerHTML = Number(request.maxSteps);
            btnRight.classList.remove(activeBtn);
            svgRight.classList.remove(activeIcons);
            btnLeft.classList.add(activeBtn);
            svgleft.classList.add(activeIcons);
          } else {
            query = window.location.search.replace(
              `&pages=${Number(request.query)}`,
              `&pages=${Number(request.query) + 1}`
            );
            lengthPage.innerHTML = Number(request.query) + 1;
            btnLeft.classList.add(activeBtn);
            svgleft.classList.add(activeIcons);
          }

          request.navigation(query);
        }

        break;
      default:
        break;
    }
  }
}

export default new HandleNavigationResultItems();
