import { getCookie, removeCookie, setCookie } from "typescript-cookie"
import css from "../render__items__buy.module.scss"
const handle__del__single__item = (nameProduct:string) => {

    
    removeCookie(nameProduct)
    if (Number(getCookie("lengthCart")) > 1) {
        setCookie("lengthCart", Number(getCookie("lengthCart")) - 1)
    } else {
        removeCookie("lengthCart")
    }
}
const handleDelHasChecked = () => {
    const inputElement: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${css.body__box__input} .${css.body__input__checkbox}:checked`))
    inputElement.forEach(inputItem => {
        handle__del__single__item(inputItem.name)
    })

}

const handleBtnDelUnder1000px = async (tagElement: HTMLDivElement | null, classItemsRender: string, classBtnOther: string, classActive: string, classBoxInforItem: string, nameBtn: string) => {

    let elementBtn = tagElement
    let items = elementBtn?.parentElement
    let start = 1
    for (let i = 0; i < start; i++) {

        if (items?.classList.contains(classItemsRender)) {
            start = i
            items = items
        } else {
            items = items?.parentElement
            start = start + 1
        }
    }

    const boxInfoItem: HTMLDivElement | null | undefined = items?.querySelector(`.${classBoxInforItem}`)
    const btnOther: HTMLDivElement | null = items?.querySelector(`.${classBtnOther}`)
    const btnHasActive: HTMLDivElement | null = items?.querySelector(`.${classActive}`)
    btnHasActive?.classList.remove(classActive)
    switch (nameBtn) {
        case "edit":
            boxInfoItem?.scrollTo({
                left: boxInfoItem.clientWidth,
                behavior: "smooth"
            })
            btnOther?.classList.add(classActive)
            break;
        case "done":
            boxInfoItem?.scrollTo({
                left: 0,
                behavior: "smooth"
            })
            btnOther?.classList.add(classActive)
            break;
        default:
            break;
    }

}

export { handle__del__single__item, handleDelHasChecked, handleBtnDelUnder1000px }