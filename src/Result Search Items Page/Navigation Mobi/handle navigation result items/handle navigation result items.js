
import css from "../Navigation Mobi.module.scss";

class HandleNavigationResultItemsMobi {

    slideRowBarNav(index) {
        let tagSlideBar = document.querySelector(`.${css.navigation__header__bar}`)
        if (!!tagSlideBar) {
            tagSlideBar.style.left = `${tagSlideBar.clientWidth * index}px`;
        } else {
            console.error("Element not found");
        }
    }
    handleLinksNavigation(data) {
        let tagSlideBar = document.querySelector(`.${css.navigation__header__bar}`)
        const query = window.location.search.replace(tagSlideBar.getAttribute("name"),data.text)
        console.log(query);
        data.navigation(query) 
        // tagSlideBar.setAttribute("name", data.text)
    }
}

export default new HandleNavigationResultItemsMobi()
