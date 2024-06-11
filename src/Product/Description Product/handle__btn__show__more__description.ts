
const colapDescription = (css: {
    footer: string;
    footer__text__btn: string;
    body: string;
    show__more: string;
    height__auto: string;
    footer__icon__btn: string;
    rotate__180deg: string;
}): void => {

    const btnFooter = document.querySelector(`.${css.footer}`) as HTMLElement
    const textBtn = document.querySelector(`.${css.footer__text__btn}`) as HTMLElement
    const boxBody = document.querySelector(`.${css.body}`) as HTMLElement;
    const IconArrow = document.querySelector(`.${css.footer__icon__btn}`) as HTMLElement;
    switch (true) {
        case btnFooter.classList.contains(css.show__more):
            btnFooter.classList.remove(css.show__more); 
            boxBody.classList.add(css.height__auto)
            IconArrow.classList.add(css.rotate__180deg)
            textBtn.innerHTML = 'Show Less'
            break;
        case !btnFooter.classList.contains(css.show__more):
            btnFooter.classList.add(css.show__more)
            boxBody.classList.remove(css.height__auto)
            IconArrow.classList.remove(css.rotate__180deg)
            textBtn.innerHTML = 'Show More'
            break;
        default:
            break;
    }

}



export { colapDescription }