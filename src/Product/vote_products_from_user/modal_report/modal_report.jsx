import { Icons } from "../../../Container  Component  SVG ICON/Manage Icon";
import handleOpenAndCloseModal from "./handle_modal";
import css from "./modal_report.module.scss";

const ModalReport = () => {
  return (
    <div
      className={css.modal__report}
      onClick={() => {
        handleOpenAndCloseModal("close");
      }}
    >
      <div
        className={css.frame__report}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={css.header}>
          <div className={css.header__title}>Select a Reason</div>
          <div className={css.btn__close}>
            <Icons.closeX
              className={css.icon__close}
              onClick={() => {
                handleOpenAndCloseModal("close");
              }}
            />
          </div>
        </div>
        <div className={css.body}>
          <ul className={css.body__select}>
            <li className={css.options}>
              Sản phẩm bị cấm buôn bán (động vật hoang dã, 18+,...)
            </li>
            <li className={css.options}>Sản phẩm có dấu hiệu lừa đảo</li>
            <li className={css.options}>Hàng giả, hàng nhái</li>
            <li className={css.options}>
              Sản phẩm không rõ nguồn gốc, xuất xứ
            </li>
            <li className={css.options}>Hình ảnh sản phẩm không rõ ràng</li>
            <li className={css.options}>
              Sản phẩm có hình ảnh, nội dung phản cảm hoặc có thể gây phản cảm
            </li>
            <li className={css.options}>Khác</li>
            <li className={css.options}>
              Tên sản phẩm (Name) không phù hợp với hình ảnh sản phẩm
            </li>
            <li className={css.options}>Sản phẩm có dấu hiệu tăng đơn ảo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalReport;
