import clsx from "clsx";
import React from "react";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css from "./Voucher Product.module.scss";
type vouchers = string[];

const VoucherProduct: React.FC<vouchers> = (data: { Vouchers: vouchers }) => {
  const cliceArryVoucher: string[] = data.Vouchers.slice(0, 2);
  return (
    <div className={clsx(css.voucher__product)}>
      <div className={clsx(css.layout, "layout")}>
        <div className={clsx(css.title)}>Shop Vouchers</div>
        <div className={clsx(css.vouchers__outstanding)}>
          {cliceArryVoucher.map((item) => {
            return <div className={css.vouchers__item}>{item}</div>;
          })}

          <Icons.arrowAngleRight className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default VoucherProduct;
