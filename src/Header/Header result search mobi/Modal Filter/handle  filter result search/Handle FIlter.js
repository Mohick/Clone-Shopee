class HandleFilterResultSearch {
  openModalFilter() {
    const modalFilter = document.querySelector(
      "#modal__filter__result__search"
    );
    modalFilter?.classList.add("modal__filter__result__search--active");
    setTimeout(() => {
      const frameModal = document.querySelector(
        ".modal__filter__result__search--frame "
      );
      frameModal.classList.add(
        "modal__filter__result__search__frame--animation300ms"
      );
    }, 1);
  }
  closeModalFilter() {
    const frameModal = document.querySelector(
      ".modal__filter__result__search--frame "
    );
    frameModal?.classList.remove(
      "modal__filter__result__search__frame--animation300ms"
    );
    setTimeout(() => {
      const modalFilter = document.querySelector(
        "#modal__filter__result__search"
      );
      modalFilter?.classList.remove("modal__filter__result__search--active");
    }, 299);
  }
  createClassChooseForOptions(tag, name) {
    switch (true) {
      case !tag.getAttribute("check"):
        const tagIconSVG = `  <svg
            class='modal__filter__result__search__body__items__options__choose__icon--svg'
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            role="img"
          >
            <path
              stroke="none"
              d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"
            ></path>
          </svg>`;
        const createDiv = document.createElement("div");
        const createDivContainerIcon = document.createElement("div");
        createDivContainerIcon.innerHTML = tagIconSVG;
        createDivContainerIcon.classList.add(
          "modal__filter__result__search__body__items__options__choose--icon"
        );
        createDiv.classList.add(
          "modal__filter__result__search__body__items__options--choose"
        );
        createDiv.appendChild(createDivContainerIcon);
        tag.appendChild(createDiv);
        tag.setAttribute("check", name);
        break;
      case !!tag.getAttribute("check"):
        const divCreate = tag.querySelector(
          ".modal__filter__result__search__body__items__options--choose"
        );
        tag.removeAttribute("check");
        divCreate.remove();
        break;
    }
  }
  showMore(tagParentElenter) {
    const viewMore = tagParentElenter.querySelector(
      ".modal__filter__result__search__body__box--options--views--more"
    );
    const changesNameTextCurrent = tagParentElenter.querySelector(
      ".modal__filter__result__search__body__items__btn__show--changes"
    );
    const iconDown = tagParentElenter.querySelector(
      ".modal__filter__result__search__body__items__btn__show--icon--down"
    );
    switch (true) {
      case viewMore.classList.contains(
        "modal__filter__result__search__body__box__options__views__more--h-auto"
      ):
        viewMore.classList.remove(
          "modal__filter__result__search__body__box__options__views__more--h-auto"
        );
        changesNameTextCurrent.innerHTML = "More";
        iconDown.classList.remove(
          "modal__filter__result__search__body__items__btn__show__icon__down--rotate"
        );
        break;
      case !viewMore.classList.contains(
        "modal__filter__result__search__body__box__options__views__more--h-auto"
      ):
        viewMore.classList.add(
          "modal__filter__result__search__body__box__options__views__more--h-auto"
        );

        changesNameTextCurrent.innerHTML = "Less";
        iconDown.classList.add(
          "modal__filter__result__search__body__items__btn__show__icon__down--rotate"
        );
      default:
        break;
    }
  }
  createClassChooseForRating(tag, name) {
    const itemsHasChoose = tag.parentElement.querySelectorAll(
      ".modal__filter__result__search__body__items__options--choose"
    );

    switch (true) {
      case !tag.getAttribute("check"):
        itemsHasChoose.forEach((item) => {
          item.parentElement.removeAttribute("check");
          item.remove();
        });
        const tagIconSVG = `  <svg
              class='modal__filter__result__search__body__items__options__choose__icon--svg'
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              role="img"
            >
              <path
                stroke="none"
                d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"
              ></path>
            </svg>`;
        const createDiv = document.createElement("div");
        const createDivContainerIcon = document.createElement("div");
        createDivContainerIcon.innerHTML = tagIconSVG;
        createDivContainerIcon.classList.add(
          "modal__filter__result__search__body__items__options__choose--icon"
        );
        createDiv.classList.add(
          "modal__filter__result__search__body__items__options--choose"
        );
        createDiv.appendChild(createDivContainerIcon);
        tag.appendChild(createDiv);
        tag.setAttribute("check", name);
        break;
      case !!tag.getAttribute("check"):
        const divCreate = tag.querySelector(
          ".modal__filter__result__search__body__items__options--choose"
        );
        tag.removeAttribute("check");
        divCreate.remove();
        break;
    }
  }
  createClassChooseForPriceRange(tag, price) {
    const itemsHasChoose = tag.parentElement.querySelectorAll(
      ".modal__filter__result__search__body__items__options--choose"
    );
    const inputValueMin = document.querySelector(
      '.modal__filter__result__search__body__items__body__search__price--min[type="number"]'
    );
    const inputValueMax = document.querySelector(
      '.modal__filter__result__search__body__items__body__search__price--max[type="number"]'
    );

    switch (true) {
      case !tag.getAttribute("check"):
        itemsHasChoose.forEach((item) => {
          item.parentElement.removeAttribute("check");
          item.remove();
        });
        const tagIconSVG = `  <svg
              class='modal__filter__result__search__body__items__options__choose__icon--svg'
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              role="img"
            >
              <path
                stroke="none"
                d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"
              ></path>
            </svg>`;
        const createDiv = document.createElement("div");
        const createDivContainerIcon = document.createElement("div");
        createDivContainerIcon.innerHTML = tagIconSVG;
        createDivContainerIcon.classList.add(
          "modal__filter__result__search__body__items__options__choose--icon"
        );
        createDiv.classList.add(
          "modal__filter__result__search__body__items__options--choose"
        );
        createDiv.appendChild(createDivContainerIcon);
        tag.appendChild(createDiv);
        tag.setAttribute("check", true);
        inputValueMin.value = price.min;
        inputValueMax.value = price.max;
        break;
      case !!tag.getAttribute("check"):
        const divCreate = tag.querySelector(
          ".modal__filter__result__search__body__items__options--choose"
        );
        tag.removeAttribute("check");
        divCreate.remove();
        inputValueMin.value = "";
        inputValueMax.value = "";
        break;
    }
  }
  handleBtnApplyFilter(navigation, query) {
    const checkAll = document.querySelectorAll(
      ".modal__filter__result__search__body__items--options"
    );
    const filterAllItemsHadChecked = [...checkAll].filter((item) => {
      return item.getAttribute("check");
    });
    const bar = "_".trim();
    const sortby = query.get("sortby");
    const mapSaveName = new Map();
    const inputMin = document.querySelector(
      ".modal__filter__result__search__body__items__body__search__price--min"
    );
    const inputMax = document.querySelector(
      ".modal__filter__result__search__body__items__body__search__price--max"
    );

    filterAllItemsHadChecked.map((item) => {
      if (!!mapSaveName.get(item.getAttribute("title"))) {
        const multipleName = mapSaveName
          .get(item.getAttribute("title"))
          .name.push(
            item
              .getAttribute("name")
              .toLocaleLowerCase()
              .trim()
              .replace(/\s+/g, "")
              .replace(/đ/g, "d")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") + bar
          );
        const conFigArrToString = mapSaveName
          .get(item.getAttribute("title"))
          .name.join("");
        const configStrToArr = [conFigArrToString];
        mapSaveName.get(item.getAttribute("title")).name = configStrToArr;
        mapSaveName.set(
          item.getAttribute("title"),
          mapSaveName.get(item.getAttribute("title"))
        );
      } else {
        mapSaveName.set(item.getAttribute("title"), {
          name: [
            item
              .getAttribute("name")
              .toLocaleLowerCase()
              .trim()
              .replace(/\s+/g, "")
              .replace(/đ/g, "d")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") + bar,
          ],
        });
      }
    });
    const inputValueMin = inputMin.value.trim();
    const inputValueMax = inputMax.value.trim();
    let price;
    if (inputValueMin && inputValueMax) {
      price = `&price=${inputValueMin}${bar}${inputValueMax}`.trim();
    }
    const configMapToObject = Object.fromEntries(mapSaveName);
    const getKeyFromOb = Object.keys(configMapToObject);
    const queryNavigation = getKeyFromOb.map((keyName) => {
      return `&${keyName}=${configMapToObject[keyName].name.join("")}`;
    });
    const querySearch = query.get("search");
    const textNavigation = !!price
      ? "?search=" +
        querySearch +
        `&sortby=${sortby}` +
        queryNavigation.join("") +
        price
      : "?search=" +
        querySearch +
        `&sortby=${sortby}` +
        queryNavigation.join("");
    navigation(textNavigation);
  }
  resetOptions(navigation, query, clearOptions) {
    const checkAll = document.querySelectorAll(
      ".modal__filter__result__search__body__items--options"
    );
    const filterAllItemsHadChecked = [...checkAll].filter((item) => {
      return item.getAttribute("check");
    });
    [...filterAllItemsHadChecked].map((item) => {
      clearOptions(item);
    });
    const getSearch = query.get("search");
    const inputMin = document.querySelector(
      ".modal__filter__result__search__body__items__body__search__price--min"
    );
    const inputMax = document.querySelector(
      ".modal__filter__result__search__body__items__body__search__price--max"
    );
    inputMin.value = "";
    inputMax.value = "";
    const sortby = query.get("sortby");
    const textNavigation = `?search=${getSearch}&sortby=${sortby}`;
    navigation(textNavigation);
  }
  autoSelectOptions(autoPickOptions) {

    const checkAll = document.querySelectorAll(
      ".modal__filter__result__search__body__items--options"
    );
    const filterAllItemsHadSameWithQuery = [...checkAll].filter((item) => {
      return window.location.search.includes(
        item
          .getAttribute("name")
          .toLocaleLowerCase()
          .trim()
          .replace(/\s+/g, "")
          .replace(/đ/g, "d")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    });
    [...filterAllItemsHadSameWithQuery].map((item) => {
      autoPickOptions(item, item.getAttribute("name"));
    });
  }
}

export default new HandleFilterResultSearch();
