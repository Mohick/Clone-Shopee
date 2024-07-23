import { getCookie, getCookies, removeCookie, setCookie } from "typescript-cookie"
import cssFooter from "../../Footer/footer.module.scss"
import css from "../render__items__buy.module.scss"
import axios from "axios"

const handle__del__single__item = async (nameProduct: string) => {

    await removePriceDeleMoveTotalCost(nameProduct)
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

const removePriceDeleMoveTotalCost = async (nameProduct: string) => {

    await axios.get("https://json-be-shopee.onrender.com/filter__cart").then((response) => {
        const data: {
            name: string
            cost: string | number
        }[] = response.data;
        const itemDel = data.filter((item) => {
            return item.name === nameProduct;
        });
        const getKeyCookies = Object.keys(getCookies())
        const restItems = data.filter((item) => {

            if (getKeyCookies.includes(item.name) && !itemDel.includes(item)) {

                return getKeyCookies.includes(item.name);
            }
        });
        const totalCostItemsRest = restItems.reduce((initValue, items) => {
            return initValue + (Number(items.cost) * Number(getCookie(items.name)))
        }, 0)
        const divPriceFooter = document.querySelector(`.${cssFooter.footer__result__cost__products}`) as HTMLDivElement
        if (divPriceFooter) {
            divPriceFooter.innerHTML = `${totalCostItemsRest}`.createDotsNumber()
        }

    })
}


export { handle__del__single__item, handleDelHasChecked, handleBtnDelUnder1000px }