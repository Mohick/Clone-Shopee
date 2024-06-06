import { useLocation } from "react-router";
import { DataProduct } from "./Data";
import { useEffect, useState } from "react";
import ProductHeaderMobi from "./Product Header/Product Header";
import clsx from "clsx";
import css from "./Product.module.scss";
import SwiperProduct from "./Swiper Product/Swiper Product";
import axios from "axios";
import IntroduceProducts from "./Introduce/Introduce Products";
import TitleProduct from "./Title Product/Title Product";
import PriceProduct from "./Price Product/Price Product";
import FreeReturnProduct from "./Free Return/Free Return";
import VoteProducts from "./Vote/Vote Products";
import VoucherProduct from "./Voucher/Voucher Product";
const Product = () => {
  const [items, setItems] = useState(false);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const title = useQuery().get("title").toLocaleLowerCase();
  useEffect(() => {
    const URLItems = DataProduct.filter((item) => {
      return item.name === title;
    });
    const getFirstItems = URLItems[0];
    axios.get(getFirstItems.link).then((response) => {
      const data = response?.data[0];
      setItems(data);
    });
  }, []);
  console.log(items);
  return !items ? undefined : (
    <div id="Product" className={clsx(css.product)}>
      <SwiperProduct
        data={{
          arrImg: items.images,
          events: items.event,
        }}
      />
      <ProductHeaderMobi name={items.name} />
      <IntroduceProducts
        data={{
          priceDeFault: items.priceDeFault,
          discount: items.discount,
          sold: items.sold,
        }}
      />
      <div className={css.info__products}>
        <div className={clsx("layout")}>
          <TitleProduct name={items.name} />
          <PriceProduct price={items.discount} />
        </div>
        <FreeReturnProduct />
        <div className={clsx("layout")}>
          <VoteProducts star={items.star} sold={items.sold} />
        </div>
      </div>
      <VoucherProduct Vouchers={items.Vouchers} />
    </div>
  );
};

export default Product;
