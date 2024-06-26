import axios from "axios";
import cssFooter from "../Footer/footer.module.scss"
import cssRender from "../render__items__buy/render__items__buy.module.scss"
import { getCookie } from "typescript-cookie";

type ruleSavePrice = {
    titleProduct: string;
    priceProduct: string | number;
}[]


const resultOfAllProductsHasChecked = () => {
    const inputHasChecked: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}:checked`))
    const amountHasChecked: HTMLSpanElement | null = document.querySelector(`.${cssFooter.footer_num__amount__products}`)
    if (amountHasChecked) {
        amountHasChecked.innerText = `${inputHasChecked.length}`;
    }

}

const saveOrRemoveSavePrice = async () => {
    const itemsHasChecked: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.render__items__in__cart__body} .${cssRender.body__input__checkbox}:checked`))
    const obMapHasChecked = new Map()
    itemsHasChecked.forEach((item) => {
        obMapHasChecked.set(item.name, true)
    })
    await axios.get("http://localhost:3000/filter__cart").then((res) => {
        const dataHasRes: {
            name: string
            cost: string | number
        }[] = res.data;
        const filterHaveChecked = dataHasRes.reduce((begin, item) => {

            if (obMapHasChecked.get(item.name)) {
                return begin + (Number(item.cost) * Number(getCookie(`${item.name}`)))
            }
            return begin
        }, 0)
        const tagSpanResultCost: HTMLSpanElement | null = document.querySelector(`.${cssFooter.footer__result__cost__products}`)
        if (tagSpanResultCost) {
            tagSpanResultCost.innerHTML = `${filterHaveChecked}`.createDotsNumber()
        }

    }).catch((err) => {
        console.log(err)
    })
}


export { resultOfAllProductsHasChecked, saveOrRemoveSavePrice }