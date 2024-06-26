
const handleWhenScrollMainImgBannerProducts = (css: {
    length__swiper: string;
    item: string;
    current: string;
}, elementBoxFrame: HTMLElement): void => {
    const lengthOfSwiper = document.querySelector(`.${css.length__swiper} .${css.current}`) as HTMLElement
    const sizeOfFrame: number = elementBoxFrame.clientWidth
    const allItemsSlider = [...elementBoxFrame.querySelectorAll(`.${css.item}`)]

    for (let index = 0; index < allItemsSlider.length; index++) {
        const item = allItemsSlider[index];
        const localtionFromLeftScreenToItem: number = item.getBoundingClientRect().left
        const localtionFromLeftScreenToFrameItems: number = elementBoxFrame.getBoundingClientRect().left
        const itemsHaveValueNearLeftFrame = Math.ceil(localtionFromLeftScreenToFrameItems - localtionFromLeftScreenToItem)
        if ((sizeOfFrame / 2) > itemsHaveValueNearLeftFrame) {
            const getAttributeDataIndex = item.getAttribute("data-index")
            lengthOfSwiper.innerHTML = `${Number(getAttributeDataIndex) + 1}`
            break;
        }

    }

}



export { handleWhenScrollMainImgBannerProducts }