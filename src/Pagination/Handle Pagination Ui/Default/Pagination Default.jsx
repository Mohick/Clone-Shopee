import { useEffect } from "react";
import { useLocation } from "react-router";
import css from "./Pagination Default.module.scss"
import clsx from "clsx";
import { Link } from "react-router-dom";
const PaginationDefault = ({length}) => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const arrLength = Array(length).slice(0, 5).fill("index");
  const query = useQuery();
  const page = !!query.get("pages") ? query.get("pages") : 1 ;

  let url ;

  if(window.location.search.includes('&')) {
    url = !!query.get("pages") ? window.location.search.replace(`&pages=${page}`,"&pages=") : window.location.search.trim()+`&pages=`.trim()
  }else {
   url =  !!query.get("pages") ? window.location.search.replace(`?pages=${page}`,"?pages=") : window.location.search.trim()+`?pages=`.trim()
  }

  return (
    <div id={clsx(css.box__selection)}>
        { arrLength.length > 5 ?
      <>
        {arrLength.map((length, index) => {
          return <Link to={ url+ (index + 1)} key={index} className={clsx(css.options, Number(page) == index+1 ? css.active : undefined)}>{index + 1}</Link>;
        })}
        <div className={clsx(css.options)}>
            ...
        </div>
      </>
      :arrLength.map((length, index) => {
        return <Link to={ url+ (index + 1)} key={index} className={clsx(css.options, Number(page) == index+1 ? css.active : undefined)}>{index + 1}</Link>;
      })
      }
    </div>
  );
};

export default PaginationDefault;
