import { useLocation } from "react-router-dom";
import { DataProduct } from "./Data";
import { useEffect, useState } from "react";
import ProductHeaderMobi from "./Product Header/Product Header";
import SwiperProduct from "./Swiper Product/Swiper Product";
import axios from "axios";
import TitleProduct from "./Title Product/Title Product";
import PriceProduct from "./Price Product/Price Product";
import FreeReturnProduct from "./Free Return/Free Return";
import VoteProducts from "./Vote/Vote Products";
import VoucherProduct from "./Voucher/Voucher Product";
import FreeShipProducts from "./Free Ship/Free Ship";
import MediaProducts from "./Media/Media";
import InfoShop from "./Info Shop/Info Shop";
import OrtherProducts from "./Other Product/Other__Products";
import DescriptionProduct from "./Description Product/Description Product";
import RatingProduct from "./Rating Products/Rating Products";
import ReltesProduct from "./Relate_Product/Relate_Product";
import css from "./products.module.scss";
import css1000 from "./product_1000.module.scss";
import VoteProductsFromUser from "./vote_products_from_user/vote_products_from_user";
import FreeReturnProduct1000 from "./Free Return/free_return_1000";
import FreeShip1000 from "./Free Ship/free_ship_1000";
import QuantityProduct1000 from "./Quantity/quantity_1000";
import BtnBuyProducts1000 from "./btn__buy__products/btn__buy__products__1000";
import Media1000 from "./Media/media__1000";
import clsx from "clsx";
import VoucherProduct1000 from "./Voucher/voucher_product_1000";
import DropdownBuyProduct from "./dropdown__buy__product/dropdown__buy__product";
const Product = () => {
  const [items, setItems] = useState(null);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const title = useQuery().get("title").toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URLItems = DataProduct.filter((item) => item.name === title);
        const getFirstItems = URLItems[0];

        await Promise.all([
          axios.get("http://localhost:3000/api__search/"),
          axios.get(getFirstItems.link),
        ]).then(([otherProductsResponse, productResponse]) => {
          let data = productResponse.data[0];
          data.otherProducts = otherProductsResponse.data;
          setItems(data);
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [title]);
  if (!items) return;
  return (
    <div className={clsx(css.layout, "layout")}>
      <ProductHeaderMobi name={items.name} />
      <div className={css1000.introduce__product}>
        <div className={css1000.ui__products}>
          <div className={css1000.slider__product}>
            <SwiperProduct
              data={{
                arrImg: items.images,
                events: items.event,
              }}
            />
            <Media1000 like={items.rating} />
          </div>
        </div>
        <div className={css1000.text__info__products}>
          <TitleProduct name={items.name} />
          <VoteProductsFromUser
            star={items.star}
            rating={items.rating}
            sold={items.sold}
          />
          <PriceProduct price={items.priceDeFault} discount={items.discount} />
          <VoucherProduct1000 voucher={items.Vouchers} urlImgShop={items.logoShop}/>
          <FreeReturnProduct />
          <FreeReturnProduct1000 />
          <FreeShip1000 />
          <QuantityProduct1000 available={items.available} />
          <BtnBuyProducts1000 id={items.id} nameProduct={items.name} />
        </div>
      </div>

      <VoteProducts star={items.star} sold={items.sold} />
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
        timeJoinShop={items.joinedShop}
        rating={items.rating}
        followShop={items.Follower}
      />
      <OrtherProducts otherProducts={items.otherProducts} />
      <DescriptionProduct
        Kind={items.kind}
        category={items.navigationProducts}
        discount={100 - (items.discount / items.priceDeFault) * 100}
        arrayString={items.productDescription}
        shipFrom={items.locationShop}
      />
      <RatingProduct comment={items.comment} star={items.star} />
      <ReltesProduct dataRelateProduct={items.otherProducts} />
      <DropdownBuyProduct nameProducts={items.name}/>
    </div>
  );
};

export default Product;
