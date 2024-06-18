
const handleBtnGrowOrDownBuyProduct = (css: {
    body__calculator: string
    calculator__input: string
}, nameBtn: string,max__length__product:number = 30) => {

    const inputNumber = document.querySelector(`.${css.body__calculator} .${css.calculator__input}`) as HTMLInputElement
    const valueInput: number = Number(inputNumber.value)
    switch (nameBtn) {
        case "next":
            if(valueInput < max__length__product) {
                inputNumber.value = `${valueInput + 1}`
            }
            break;
        case "prev":
            if(valueInput > 1) {
                inputNumber.value = `${valueInput - 1}` 
            }
            break;
        default:
            break;
    }

}
export { handleBtnGrowOrDownBuyProduct }