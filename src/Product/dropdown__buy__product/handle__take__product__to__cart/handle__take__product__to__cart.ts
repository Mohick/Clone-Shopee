import css1000 from "../../Quantity/quantity_1000.module.scss"
import { getCookie, setCookie } from 'typescript-cookie'

const handleTakeProductToCart = (nameProduct: string, id: number | string) => {
    const propsCss = css1000 as {
        quantity: string
        calculator__input: string
    }
    const inputLengthProducts = document.querySelector(`.${propsCss.quantity} .${propsCss.calculator__input}`) as HTMLInputElement

    if (getCookie(nameProduct)) {
        setCookie(nameProduct, Number(getCookie(nameProduct)) + Number(inputLengthProducts.value))
    } else {
        setCookie(nameProduct, Number(inputLengthProducts.value))
        if (getCookie("lengthCart")) {
            setCookie("lengthCart", Number(getCookie("lengthCart")) + 1)
        } else {
            setCookie("lengthCart", 1)
        }

    }
}

export {
    handleTakeProductToCart
}