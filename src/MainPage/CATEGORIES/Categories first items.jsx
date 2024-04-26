import { memo } from "react";

function CategoriesFirstItemsMainPage({ firstData = [] }) {
  console.log(firstData);

  return firstData.map((item, index) => {
    return (
      <div className="categories__main__page__body__first--item">
        <div className="categories__main__page__body__first__item--img">
          <img width={'100%'} height={'100%'} src={item.img} alt="" />
        </div>
        <div className="categories__main__page__body__first__item--name" >{item.name}</div>
      </div>
    );
  });
}

export default memo(CategoriesFirstItemsMainPage);
