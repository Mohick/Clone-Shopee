import { useLocation } from "react-router-dom";
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
import FreeShipProducts from "./Free Ship/Free Ship";
import MediaProducts from "./Media/Media";
import InfoShop from "./Info Shop/Info Shop";
import OrtherProducts from "./Other Product/Other__Products";

const Product = () => {
  const [items, setItems] = useState(null);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const title = useQuery().get("title").toLocaleLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URLItems = DataProduct.filter((item) => item.name === title);
        const getFirstItems = URLItems[0];

        const [otherProductsResponse, productResponse] = await Promise.all([
          axios.get('https://run.mocky.io/v3/94311c5e-d335-4641-8b5d-2a1e9d045b3c'),
          axios.get(getFirstItems.link),
        ]);

        let data = productResponse.data[0];
        data.otherProducts = otherProductsResponse.data;
        setItems(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [title]);

  if (!items) return null;

  return (
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
      <FreeShipProducts />
      <MediaProducts />
      <InfoShop
        imgShop={items.logoShop}
        voucherShop={items.Vouchers}
        nameShop={items.nameShop}
        localtionsShop={items.locationShop}
        productShop={items.productsShop}
        responsiveShop={items.responseRateShop}
        starShop={items.star}
      />
      <OrtherProducts otherProducts={items.otherProducts} />
    </div>
  );
};

export default Product;
