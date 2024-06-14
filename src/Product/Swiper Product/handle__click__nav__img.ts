

type props = number

function handle__click__nav__img(locations: props,css:{
    frame:string,
}) {
    const boxFrame = document.querySelector(`.${css.frame}`)
    boxFrame?.scrollTo({
        left: boxFrame.clientWidth * locations,
        behavior: "smooth"
    })
}

export  {handle__click__nav__img};