import clsx from "clsx";
import React from "react";
import css from "./Rating Products.module.scss";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import LikeComment from "./LIke Comment/LIke Comment";
type props = {
  comment: {
    description: string;
    like: number | string;
    star: number | string;
  }[];
  star: string | number;
};

const RatingProduct: React.FC<props> = (props: props) => {
  console.log(props.comment);

  return (
    <div className={clsx(css.rating__product)}>
      <div className={clsx(css.layout, "layout")}>
        <div className={clsx(css.header)}>
          <div className={css.header__info__rating}>
            <div className={css.header__box__title__and__star}>
              <div className={clsx(css.header__title)}>Product Ratings</div>
              <div className={clsx(css.header__star)}>
                <Icons.starFull className={css.heaeder__star} />
                <Icons.starFull className={css.heaeder__star} />
                <Icons.starFull className={css.heaeder__star} />
                <Icons.starFull className={css.heaeder__star} />
                <Icons.starFull className={css.heaeder__star} />
                <span className={clsx(css.header__num__star)}>
                  {props.star} / 5
                </span>
                <span className={clsx(css.header__num__vote)}>
                  ({props.comment.length} Views)
                </span>
              </div>
            </div>
            <div className={clsx(css.header__box__see__more)}>
              <div className={clsx(css.header__box__btn)}>
                see all <Icons.arrowAngleRight className={css.header__icon} />
              </div>
            </div>
          </div>
          <div className={css.header__selection}>
            <div className={clsx(css.header__options)}>
              Giao hàng nhanh (17)
            </div>
            <div className={clsx(css.header__options)}>Chất lượng tốt (11)</div>
            <div className={clsx(css.header__options)}>
              Đóng gói cẩn thận (123)
            </div>
          </div>
        </div>
        <div className={clsx(css.body)}>
          {props.comment.map((comment, index) => {
            return (
              <div key={index} className={css.body__items}>
                <div className={clsx(css.body__info__user)}>
                  <div className={clsx(css.body__box__avatar__and__name)}>
                    <div className={css.body__avatar}>
                      <img
                        width={"100%"}
                        height={"100%"}
                        src="./user/user.png"
                        alt=""
                      />
                    </div>
                    <div className={css.body__name__user}>đẹ****p</div>
                  </div>
                  <div className={clsx(css.body__like)}>
                    <LikeComment
                      classCustomText={css.body__text__like}
                      numberVotesComment={comment.like}
                      classCustomLikeNoColor={clsx(css.body__no__color__like)}
                      classCustomLikeHaveColor={clsx(
                        css.body__have__color__like
                      )}
                    />
                    <Icons.menuThreeDots className={css.body__three__dots} />
                  </div>
                </div>
                <div className={css.body__vote__star}>
                  {Array(Number(5))
                    .fill("1")
                    .map((length, index) => {
                      return Number(comment.star) <= index ? (
                        <Icons.starEmpty
                          className={css.body__icon__empty__star}
                        />
                      ) : (
                        <Icons.starFull
                          className={css.body__icon__full__star}
                        />
                      );
                    })}
                </div>
                <div className={clsx(css.body__comment__of__user)}>
                    {comment.description}
                    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingProduct;
