import clsx from "clsx";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import css from  "./Free Return.module.scss"
import css600 from "./free_return_600.module.scss"
import css1000 from "./free_return_1000.module.scss"
const FreeReturnProduct = () => {
  return (
    <div id="free__return__product" className={clsx(css.free__return__product,css600.free__return__product,css1000.free__return__product)}>
      <div className={clsx(css.layout,css600.layout,"layout")}>

          <Icons.freeReturn  className={clsx(css.icon)}/>
        <div className={clsx(css.introduce)}>
            <div className={clsx(css.title)}>Change of Mind</div>
            <div className={clsx(css.description)}>Enjoy Free Return, no hassle fo change of mind.</div>
        </div>
      </div>
    </div>
  );
};

export default FreeReturnProduct;
