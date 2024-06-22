import { lazy, useEffect, useState } from "react";
import "./Footer MainPage Max-width 600px.css";
import "./Footer MainPage Min-width 1000px.css";
import axios from "axios";
import { useInView } from "react-intersection-observer";
const CreateItemsCategiresMainPage = lazy(() =>
  import("./Create Items Categires MainPage")
);
function FooterMainPageCategories() {
  // const [items, setItems] = useState([]);
  // const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  // useEffect(() => {
  //   const callData = setTimeout(() => {
  //     Promise.all([
  //       axios.get(
  //         "https://run.mocky.io/v3/3019e5b4-6948-491e-86e4-3752e867a47d"
  //       ),
  //       axios.get(
  //         "https://run.mocky.io/v3/e8b67da8-fca9-42ae-8473-5344be855964"
  //       ),
  //       axios.get(
  //         "https://run.mocky.io/v3/e87c0f06-dcd6-4e46-b209-606f60a4182b"
  //       ),
  //       axios.get(
  //         "https://run.mocky.io/v3/1cd16394-aad8-4105-9e88-c83b1f1ffe06"
  //       ),
  //       axios.get(
  //         "https://run.mocky.io/v3/8b5bc22a-378c-4f87-9319-93c8c2ed1f34"
  //       ),
  //     ])
  //       .then(([col1, col2, col3,col4,col5]) => {
  //         const dataCol1 = col1.data;
  //         const dataCol2 = col2.data;
  //         const dataCol3 = col3.data;
  //         const dataCol4 = col4.data;
  //         const dataCol5 = col5.data;
  //         const hashMapCol1 = dataCol1.map((item) => {
  //           return [item.name, item.content];
  //         });
  //         const hashMapCol2 = dataCol2.map((item) => {
  //           return [item.name, item.content];
  //         });
  //         const hashMapCol3 = dataCol3.map((item) => {
  //           return [item.name, item.content];
  //         });
  //         const hashMapCol4 = dataCol4.map((item) => {
  //           return [item.name, item.content];
  //         });
  //         const hashMapCol5 = dataCol5.map((item) => {
  //           return [item.name, item.content];
  //         });
  //         setItems([hashMapCol1, hashMapCol2, hashMapCol3,hashMapCol4,hashMapCol5]);
  //       })

  //       .catch((err) => {});
  //   }, 0);
  //   return () => {
  //     clearTimeout(callData);
  //   };
  // }, []);

  // return (
  //   <div className="footer__main__page--categories" ref={ref}>
  //     <div className="footer__main__page__categories--title">Categories</div>
  //     {inView ? (
  //       <div className="footer__main__page__categories--body">
  //         <div className="footer__main__page__categories__body--col">
  //           {items[0].map((item) => {
  //             return (
  //               <CreateItemsCategiresMainPage
  //                 title={item[0]}
  //                 content={item[1]}
  //               />
  //             );
  //           })}
  //         </div>
  //         <div className="footer__main__page__categories__body--col">
  //           {items[1].map((item) => {
  //             return (
  //               <CreateItemsCategiresMainPage
  //                 title={item[0]}
  //                 content={item[1]}
  //               />
  //             );
  //           })}
  //         </div>
  //         <div className="footer__main__page__categories__body--col">
  //           {items[2].map((item) => {
  //             return (
  //               <CreateItemsCategiresMainPage
  //                 title={item[0]}
  //                 content={item[1]}
  //               />
  //             );
  //           })}
  //         </div>
  //         <div className="footer__main__page__categories__body--col">
  //           {items[3].map((item) => {
  //             return (
  //               <CreateItemsCategiresMainPage
  //                 title={item[0]}
  //                 content={item[1]}
  //               />
  //             );
  //           })}
  //         </div>
  //         <div className="footer__main__page__categories__body--col">
  //           {items[4].map((item) => {
  //             return (
  //               <CreateItemsCategiresMainPage
  //                 title={item[0]}
  //                 content={item[1]}
  //               />
  //             );
  //           })}
  //         </div>
  //       </div>
  //     ) : undefined}
  //   </div>
  // );
  return 
}

export default FooterMainPageCategories;
