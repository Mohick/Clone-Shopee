class HandleFilterNavigation {
  multipleOptions = (navigation, name, query, title) => {
    const nameTitle = title;
    const bar = "_";
    const getQuery = query.get(`${nameTitle}`);
    const transferCharInputToNumber =
      `${name}`
        .split(" ")
        .reduce((begin, name) => {
          return begin + name.toLocaleLowerCase();
        }, "")
        .toLocaleLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") + bar.trim();
    const checkQuery = window.location.search.includes(
      transferCharInputToNumber
    );
    if (!getQuery) {
      navigation(
        window.location.search + `&${nameTitle}=${transferCharInputToNumber}`
      );
    } else {
      switch (checkQuery || !checkQuery) {
        case checkQuery:
          const getQueryFromUrlWhenHasNumberNav = window.location.search;
          const replaceQueryWhenHasNumberNav =
            getQuery.split(`${bar}`).length <= 2
              ? getQueryFromUrlWhenHasNumberNav.replace(
                  `&${nameTitle}=${transferCharInputToNumber}`,
                  ""
                )
              : getQueryFromUrlWhenHasNumberNav.replace(
                  `${transferCharInputToNumber}`,
                  ""
                );
          navigation(replaceQueryWhenHasNumberNav);
          break;
        case !checkQuery:
          const getQueryFromUrlWhenHaventNumberNav = window.location.search;
          const replaceQueryWhenHaventNumberNav =
            getQueryFromUrlWhenHaventNumberNav.replace(
              `${getQuery}`,
              `${getQuery + transferCharInputToNumber}`
            );
          navigation(replaceQueryWhenHaventNumberNav);
          break;
        default:
          break;
      }
    }
  };
  btnPriceInputPc = (navigation, query, title) => {
    const inputMin = document.querySelector(
      ".result__search__items__page__filter__body__items__price--min"
    );
    const inputMax = document.querySelector(
      ".result__search__items__page__filter__body__items__price--max"
    );
    const alertInvalid = document.querySelector(
      ".result__search__items__page__filter__body__items--alert"
    );
    const btnSumitPrice = document.querySelector(
      ".result__search__items__page__filter__body__items--btn--submit"
    );
    const nameTitle = title;
    const bar = "_";
 
    switch (!!inputMax.value && !!inputMin.value) {
      case Number(inputMin.value) > Number(inputMax.value):
        alertInvalid.classList.add(
          "result__search__items__page__filter__body__items__alert--opacity1"
        );
        break;
      case Number(inputMin.value) <= Number(inputMax.value):
        alertInvalid.classList.remove(
          "result__search__items__page__filter__body__items__alert--opacity1"
        );
 
        const queryCurrent = !!btnSumitPrice.getAttribute("price")
          ? window.location.search.replace(
              `${btnSumitPrice.getAttribute("price")}`,
              `&${nameTitle}=${inputMin.value}${bar}${inputMax.value}`
            )
          : window.location.search +
            `&${nameTitle}=${inputMin.value}${bar}${inputMax.value}`;

        btnSumitPrice.setAttribute(
          "price",
          `&${nameTitle}=${inputMin.value}${bar}${inputMax.value}`
        );
        navigation(queryCurrent);
        break;
      default:
        alertInvalid.classList.add(
          "result__search__items__page__filter__body__items__alert--opacity1"
        );
        break;
    }
  };
  ratingVoteStarPc(navigation, star, title, classParent) {
    const titleName = title;
    const boxStar = document.querySelector(`.${classParent}`);
    const query = window.location.search;

    if (!!boxStar.getAttribute(titleName)) {
      navigation(
        query.replace(
          `${titleName}=${boxStar.getAttribute(titleName)}`,
          `${titleName}=${star}`
        )
      );
      boxStar.setAttribute(titleName, `${star}`); 
     
    } else {
      navigation(`${query}&${titleName}=${star}`);
      boxStar.setAttribute(titleName, `${star}`);
    }
  }
  openShowMorePC(tag) {
    const tagParent = tag.parentElement;
    const boxContainerItemNeedShow = tagParent.querySelector(
      ".result__search__items__page__filter__body__items--options--more"
    );

    boxContainerItemNeedShow.classList.add(
      "result__search__items__page__filter__body__items__options__more--height--auto"
    );
    tag.classList.add(
      "result__search__items__page__filter__body__items__btn__show__more--hidden"
    );
  }
}

export default new HandleFilterNavigation();
