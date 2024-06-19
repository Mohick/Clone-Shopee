import clsx from "clsx";
import React, { useEffect, useState } from "react";
import css from "./Rating Products.module.scss";
import css600 from "./rating_products_600.module.scss";
import css1000 from "./rating_products_1000.module.scss";
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
  const [show, setShow] = useState(null);
  useEffect(() => {
    const obMap = new Map();
    props.comment.map((comment) => {
      if (obMap.get(comment.star)) {
        obMap.set(comment.star, obMap.get(comment.star) + 1);
      } else {
        obMap.set(comment.star, 1);
      }
    });
    const ob = Object.fromEntries(obMap) 
    ob.checkActive = "all"
    ob.maxLengthComment = props.comment.length
    ob.withMedia = Math.ceil(Number(props.comment.length) / 3)
    setShow(ob)
    
  }, []);
  console.log(show);
  
  if (show == null) return;
  return (
    <div
      className={clsx(
        css.rating__product,
        css600.rating__product,
        css1000.rating__product
      )}
    >
      <div
        className={clsx(css.layout, css600.layout, css1000.layout, "layout")}
      >
        <div className={clsx(css.header, css1000.header)}>
          <div
            className={clsx(
              css.header__info__rating,
              css1000.header__info__rating
            )}
          >
            <div
              className={clsx(
                css.header__box__title__and__star,
                css1000.header__info__rating
              )}
            >
              <div className={clsx(css.header__title, css1000.header__title)}>
                Product Ratings
              </div>
              <div className={clsx(css.header__star, css1000.header__star)}>
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
            <div
              className={clsx(
                css.header__box__see__more,
                css1000.header__box__see__more
              )}
            >
              <div className={clsx(css.header__box__btn)}>
                see all <Icons.arrowAngleRight className={css.header__icon} />
              </div>
            </div>
          </div>
          <div
            className={clsx(css.header__selection, css1000.header__selection)}
          >
            <div className={clsx(css.header__options)}>
              Giao hàng nhanh (17)
            </div>
            <div className={clsx(css.header__options)}>Chất lượng tốt (11)</div>
            <div className={clsx(css.header__options)}>
              Đóng gói cẩn thận (123)
            </div>
          </div>
          <div className={clsx(css.header__filter__star,css1000.header__filter__star)}>
            <div className={css1000.header__filter__title}>
              <div className={css1000.text__title}>{props.star} out of 5</div>
              <div className={css1000.box__icon__star}>
                {Number(props.star) < 5 && Number(props.star) > 4 ? (
                  <>
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                  </>
                ) : undefined}
                {Number(props.star) < 4 && Number(props.star) > 3 ? (
                  <>
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                  </>
                ) : undefined}
                {Number(props.star) < 3 && Number(props.star) > 2 ? (
                  <>
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                  </>
                ) : undefined}
                {Number(props.star) < 2 && Number(props.star) > 1 ? (
                  <>
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                  </>
                ) : undefined}
                {Number(props.star) < 1 && Number(props.star) > 0 ? (
                  <>
                    <Icons.starVoteProduct
                      className={css1000.icons__star__full}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                    <Icons.starVoteProduct
                      className={css1000.icons__star__empty}
                    />
                  </>
                ) : undefined}
              </div>
            </div>
            <div className={css1000.header__filter__selection}>
              <div
                className={clsx(
                  css1000.header__filter__options,
                  show["checkActive"] == "all" ? css1000.active : undefined
                )}
              >
                All
              </div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "star5" ? css1000.active : undefined)}>5 star({show["5"]})</div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "star4" ? css1000.active : undefined)}>4 star({show["4"]})</div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "star3" ? css1000.active : undefined)}>3 star({show["3"]})</div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "star2" ? css1000.active : undefined)}>2 star({show["2"]})</div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "star1" ? css1000.active : undefined)}>1 star({show["1"]})</div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "maxLengthComment" ? css1000.active : undefined)}>
                with comments ({show["maxLengthComment"]})
              </div>
              <div className={clsx(css1000.header__filter__options,show["checkActive"] == "withMedia" ? css1000.active : undefined)}>
                With Media ({show["withMedia"]})
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(css.body, css1000.body)}>
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
                      return Number(comment.star) < index ? (
                        <Icons.starEmpty
                          key={index}
                          className={css.body__icon__empty__star}
                        />
                      ) : (
                        <Icons.starVoteProduct
                          key={index}
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
        <div className={clsx(css.footer, css1000.footer)}>
          <div className={clsx(css.footer__btn, css1000.footer__btn)}>
            See All Reviews (283)
            <Icons.arrowAngleRight className={css.footer__icon__arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingProduct;
