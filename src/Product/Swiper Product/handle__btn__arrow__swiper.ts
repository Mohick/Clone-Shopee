
type Css = {
    nav__img: string;
}

const handleBtnClickArrow = (css: Css, nameBtn: string) => {

    const frameSwiper = document.querySelector(`.${css.nav__img}`) as HTMLElement

    switch (nameBtn) {
        case "left":
            frameSwiper.scrollTo({
                left: frameSwiper.scrollLeft - frameSwiper.clientWidth,
                behavior: "smooth"
            })


        case "right":
            frameSwiper.scrollTo({
                left: frameSwiper.scrollLeft + frameSwiper.clientWidth,
                behavior: "smooth"
            })
            break;

        default:
            break;
    }

}



export { handleBtnClickArrow } 