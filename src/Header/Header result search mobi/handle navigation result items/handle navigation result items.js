class HandleNavigationResultItems {

    slideRowBarNav(index) {
        let tagSlideBar = document.querySelector('.header__result__search__mobi__body--navigation--bar')
        if (!!tagSlideBar) {
            tagSlideBar.style.left = `${tagSlideBar.clientWidth * index}px`;
        } else {
            console.error("Element not found");
        }
    }
    handleLinksNavigation(data) {
        console.log(data);
        data.navigation(`?sortby=${data.text}`) 
    }
}

export default new HandleNavigationResultItems
