import { setCookie } from "typescript-cookie"


const handleOnBlurInput = (amountProduct: number | string, nameProduct: string, productsAvailable: string | number, element?: any): number => {
  
    if (Number(amountProduct) > Number(productsAvailable)) {
        element.value = String(productsAvailable)
        return Number(productsAvailable)
    }
    if (Number(amountProduct) <= 0) return element.value = 1
    setCookie(nameProduct, amountProduct)
    return Number(amountProduct)
}

const handlePlusOrMinus = (tagBtn: HTMLDivElement | null, nameBTN: string, nameProducts: string,tagParent:string ,cssInput:string, productsAvailable: string | number): number => {
    let element = tagBtn?.parentElement
    let start = 1
    for (let index = 0; index < start; index++) {
        if(element?.classList.contains(tagParent)) {
            start = index
            element = element
        }else {
            element = element?.parentElement
            start = index + 1
        }
        
    }
    
    const inputElement = element?.querySelector(`.${cssInput}`) as HTMLInputElement
    
    switch (nameBTN) {
        case "minus":
            if (Number(inputElement?.value) == 1) return 1
            const minusValue = Number(inputElement.value) - 1
            inputElement.value = `${minusValue}`
            return Number(handleOnBlurInput(minusValue, nameProducts, productsAvailable, inputElement))
        case "plus":
            if (Number(inputElement?.value) == Number(productsAvailable)) return 1
            const plusValue = Number(inputElement?.value) + 1
            inputElement.value = `${plusValue}`
            return Number(handleOnBlurInput(plusValue, nameProducts, productsAvailable, inputElement))
        default:
            return 1
    }

}

export { handleOnBlurInput, handlePlusOrMinus }