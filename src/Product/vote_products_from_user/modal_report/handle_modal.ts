import css from "./modal_report.module.scss"

type NameBtn = string

const handleOpenAndCloseModal = (nameBtn: NameBtn) => {
    const modal = document.querySelector(`.${css.modal__report}`) as HTMLElement
    const frame__report = modal.querySelector(`.${css.frame__report}`) as HTMLElement
    switch (nameBtn) {
        case "open":
            modal.classList.add(css.open__display_flex)
            setTimeout(() => {
                frame__report.classList.add(css.animation__scale__300ms)
            }, 1);
            break;
        case "close":
            frame__report.classList.remove(css.animation__scale__300ms)
            setTimeout(() => {
                modal.classList.remove(css.open__display_flex)
            }, 299);
            break;

        default:
            break;
    }
}


export default handleOpenAndCloseModal