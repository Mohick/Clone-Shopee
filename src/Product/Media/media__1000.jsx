import clsx from "clsx";
import VoteLikeProduct from "../Vote/Like/Vote Like Product";
import css from "./Media.module.scss"
import css1000 from "./media__1000.module.scss";
import { useState } from "react";
const Media1000 = ({ like }) => {
  const [liked, setLike] = useState({
    check: false,
    value: like,
  });
  return (
    <div className={clsx(css.media__1000,css1000.media__1000)}>
      <div className={clsx(css1000.media__logo)}>
        <span className={clsx(css1000.logo_title)}>Share : </span>
        <button
          className={clsx(css1000.logo__img)}
          alt=""
          style={{ "--bgPosition": 0 }}
        />
        <button
          className={clsx(css1000.logo__img)}
          alt=""
          style={{ "--bgPosition": 1 }}
        />
        <button
          className={clsx(css1000.logo__img)}
          alt=""
          style={{ "--bgPosition": 2 }}
        />
        <button
          className={clsx(css1000.logo__img)}
          alt=""
          style={{ "--bgPosition": 3 }}
        />
        <button
          className={clsx(css1000.logo__img)}
          alt=""
          style={{ "--bgPosition": 4 }}
        />
      </div>
      <div className={css1000.box__like__product}>
        <div
          onClick={() => {
            console.log(Number(like));
            liked.check
              ? setLike({
                  check: false,
                  value: Number(liked.value) - 1,
                })
              : setLike({
                  check: true,
                  value: Number(liked.value) + 1,
                });
          }}
        >
          <VoteLikeProduct
            classCustomEmptyHeart={css1000.icon__like__product}
            classCustomFullHeart={css1000.icon__like__product}
          />
        </div>
        <span className={css1000.title__like__product}>
          Đã thích ({liked.value})
        </span>
      </div>
    </div>
  );
};

export default Media1000;
