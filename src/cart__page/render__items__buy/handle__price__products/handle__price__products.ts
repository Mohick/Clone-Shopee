import { setCookie } from "typescript-cookie"


const handleOnBlurInput = (amountProduct: number | string, nameProduct: string,element?:any): number => {
    
    if (Number(amountProduct) <= 0) {
        console.log(3);
        
        element.value = 1
        return 1
    }
    setCookie(nameProduct, amountProduct)
    return Number(amountProduct)
}

const handlePlusOrMinus = (classNameInput: string, nameBTN: string, nameProducts: string): number => {
    const inputElement = document.querySelector(`.${classNameInput}`) as HTMLInputElement
    switch (nameBTN) {
        case "minus":
            if (Number(inputElement.value) == 1) return 1
            const minusValue = Number(inputElement.value) - 1
            inputElement.value = `${Number(inputElement.value) - 1}`
            return Number(handleOnBlurInput(minusValue, nameProducts,inputElement))
        case "plus":
            const plusValue = Number(inputElement.value) + 1
            inputElement.value = `${Number(inputElement.value) + 1}`
            return Number(handleOnBlurInput(plusValue, nameProducts))
        default:
            return 1
    }

}

export { handleOnBlurInput, handlePlusOrMinus }