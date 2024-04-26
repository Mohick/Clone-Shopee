function handleArrowcateGoriesMainPage(nameArrow) {
    const btnArrowRight = document.querySelector('.categories__main__page--arrow-right')
    const btnArrowLeft = document.querySelector('.categories__main__page--arrow-left')
    const boxItems = document.querySelector('.categories__main__page--body')
  switch (nameArrow) {
    case "next":
        boxItems.scrollTo({ left:boxItems.scrollWidth, behavior: "smooth"})
        btnArrowRight.classList.remove("categories__main__page--arrow-active")
        btnArrowLeft.classList.add("categories__main__page--arrow-active")
      break;
    case "prev":
        boxItems.scrollTo({ left:"0", behavior: "smooth"})
        btnArrowRight.classList.add("categories__main__page--arrow-active")
        btnArrowLeft.classList.remove("categories__main__page--arrow-active")
      break;

    default:
      break;
  }
}

export { handleArrowcateGoriesMainPage };
