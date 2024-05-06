
function handleArrowTopProduct(arrow='right') {
    const boxFrame = document.querySelector('.top__product__main__page__body--frame');
    const arrayLeft = document.querySelector('.top__product__main__page__body--arrow--left');
    const arrayRight = document.querySelector('.top__product__main__page__body--arrow--right');
    switch (arrow) {
        case 'left':
            boxFrame.scrollTo({
                left: boxFrame.scrollLeft - (boxFrame.offsetWidth - (boxFrame.offsetWidth/6)),
                behavior:'smooth',
            });
            arrayRight.classList.add('top__product__main__page__body__arrow--active');
            boxFrame.addEventListener('scrollend',()=>{
                if(Math.floor(boxFrame.scrollLeft) == 0) {
                    arrayLeft.classList.remove('top__product__main__page__body__arrow--active');
                }
            })
            break;
        case 'right':
            boxFrame.scrollTo({
                left: boxFrame.scrollLeft + (boxFrame.offsetWidth - (boxFrame.offsetWidth/6)),
                behavior:'smooth',
            });
            arrayLeft.classList.add('top__product__main__page__body__arrow--active');
            boxFrame.addEventListener('scrollend',()=>{
                if(Math.floor(boxFrame.scrollLeft + boxFrame.offsetWidth)+3 >= Math.floor(boxFrame.scrollWidth)) {
                    arrayRight.classList.remove('top__product__main__page__body__arrow--active');
                }
            })
            break;
        default:
            break;
    }
}


export default handleArrowTopProduct