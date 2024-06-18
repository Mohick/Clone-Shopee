import clsx from "clsx";
import React from "react";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css from "./Voucher Product.module.scss";
import css600 from "./voucher_product_600.module.scss"
import css1000 from "./voucher_product_1000.module.scss"

type vouchers ={ Vouchers: string[]}

const VoucherProduct: React.FC<vouchers> = (data:vouchers ) => {
  const cliceArryVoucher: string[] = data.Vouchers.slice(0, 2);
  return (
    <div className={clsx(css.voucher__product,css600.voucher__product,css1000.voucher__product)}>
      <div className={clsx(css.layout,css600.layout, "layout")}>
        <div className={clsx(css.title)}>Shop Vouchers</div>
        <div className={clsx(css.vouchers__outstanding)}>
          {cliceArryVoucher.map((item,index) => {
            return <div key={index} className={css.vouchers__item}>{item}</div>;
          })}
          <Icons.arrowAngleRight className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default VoucherProduct;
