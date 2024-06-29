
import cssRender from "../render__items__buy/render__items__buy.module.scss"
import css1000Product from "../products__in__cart/products__in__cart__1000.module.scss";
import cssFooter from "../Footer/footer.module.scss"
const check__all__items__input = (tagElement: HTMLInputElement | null) => {
    const btnCheckAll = document.querySelector(`.${css1000Product.header__product__check}`) as HTMLInputElement
    const btnCheckAllFooter = document.querySelector(`.${cssFooter.footer__input__checkbox}`) as HTMLInputElement

    if (tagElement?.checked) {
        const inputBoxProductHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.header__input__checkbox}:not(:checked)`))
        const inputHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}:not(:checked)`))
        inputBoxProductHaveCheck.forEach(inputCheckbox => {
            inputCheckbox.checked = true
        })
        inputHaveCheck.forEach(inputCheckbox => {
            inputCheckbox.checked = true
        })
        btnCheckAll.checked = true
        btnCheckAllFooter.checked = true
    } else {
        const inputHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}:checked`))
        const inputBoxProductHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.header__input__checkbox}:checked`))
        inputBoxProductHaveCheck.forEach(inputCheckbox => {
            inputCheckbox.checked = false
        })
        inputHaveCheck.forEach(inputCheckbox => {
            inputCheckbox.checked = false
        })
        btnCheckAll.checked = false
        btnCheckAllFooter.checked = false
    }
}

type props__check__an__items__input = {
    elementInput: HTMLInputElement | null,
    classNameBoxItems: string
}
const check__an__items__input = (props: props__check__an__items__input) => {
    const inputHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}:checked`))
    const inputNotCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}`))

    let start: number = 1
    let element:any | HTMLElement = props?.elementInput?.parentElement;
    for (let i = 0; i < start; i++) {
        if (element?.classList.contains(`${props.classNameBoxItems}`)) {
            start = i
            element = element
            break
        } else {
            element = element?.parentElement;
            start = start + 1;

            continue
        }
    }

    if (props?.elementInput?.checked) {
        const checkBoxAll = element?.querySelector(`.${cssRender.header__input__checkbox}`)
        checkBoxAll.checked = true
    } else {
        const checkBoxAll = element?.querySelector(`.${cssRender.header__input__checkbox}`)
        checkBoxAll.checked = false
    }

    const btnCheckAll = document.querySelector(`.${css1000Product.header__product__check}`) as HTMLInputElement
    const btnCheckAllFooter = document.querySelector(`.${cssFooter.footer__input__checkbox}`) as HTMLInputElement
    if (inputNotCheck.length == inputHaveCheck.length) {
        btnCheckAll.checked = true
        btnCheckAllFooter.checked = true
    } else {
        btnCheckAll.checked = false
        btnCheckAllFooter.checked = false
    }
}


const check__box__items = (tagElement: HTMLElement |null, classNameBoxItems: string) => {
    
    let start: number = 1
    let element:any | HTMLElement = tagElement?.parentElement;
    for (let i = 0; i < start; i++) {
        if (element.classList.contains(`${classNameBoxItems}`)) {
            start = i
            element = element
            break
        } else {
            element = element?.parentElement;
            start = start + 1;
            
            continue
        }
    }
    if (tagElement?.checked) {
        const checkBoxAll = element?.querySelector(`.${cssRender.body__input__checkbox}`)
        checkBoxAll.checked = true
    } else {
        const checkBoxAll = element?.querySelector(`.${cssRender.body__input__checkbox}`)
        checkBoxAll.checked = false
    }
    const inputHaveCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}:checked`))
    const inputNotCheck: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${cssRender.body__input__checkbox}`))
    const btnCheckAll = document.querySelector(`.${css1000Product.header__product__check}`) as HTMLInputElement
    const btnCheckAllFooter = document.querySelector(`.${cssFooter.footer__input__checkbox}`) as HTMLInputElement
    if (inputNotCheck.length == inputHaveCheck.length) {
        btnCheckAll.checked = true
        btnCheckAllFooter.checked = true
    } else {
        btnCheckAll.checked = false
        btnCheckAllFooter.checked = false
    }

}


export { check__all__items__input, check__an__items__input, check__box__items }