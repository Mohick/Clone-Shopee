import clsx from "clsx";
import { Icons } from "../Container  Component  SVG ICON/Manage Icon";
import PaginationDefault from "./Handle Pagination Ui/Default/Pagination Default";
import css from "./Pagination.module.scss";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Pagination = ({length}) => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const page = !!query.get("pages") ? query.get("pages") : 1;
  length = Math.floor(length / 40) + 1
  useEffect(() => {
    // call when pages has exchange
  }, [page]);
  let url ;

  if(window.location.search.includes('&')) {
    url = !!query.get("pages") ? window.location.search.replace(`&pages=${page}`,"&pages=") : window.location.search.trim()+`&pages=`.trim()
  }else {
   url =  !!query.get("pages") ? window.location.search.replace(`?pages=${page}`,"?pages=") : window.location.search.trim()+`?pages=`.trim()
  }

  return (
    <div id={clsx(css.pagination)}>
      <Link to={Number(page) <= 1 ? window.location.search : url+ (Number(page) - 1)}
        className={clsx(
          css.btn__arrow,
          css.arrow__left,
          Number(page) <= 1 ? css.disabled : undefined
        )}
      >
        <Icons.arrowAngleLeft className={clsx(css.arrow__icon)} />
      </Link>
      <div className={css.lengthPage}>
        <PaginationDefault length={length} />
      </div>
      <Link 
      to={Number(page) == length  ? window.location.search : url+ (Number(page) + 1)}
      className={clsx(css.btn__arrow, css.arrow__right,
          Number(page) == length ? css.disabled : undefined)} >
        <Icons.arrowAngleRight className={clsx(css.arrow__icon)} />
      </Link>
    </div>
  );
};

export default Pagination;
