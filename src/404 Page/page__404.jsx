import { Link } from "react-router-dom";
import { Icons } from "../Container  Component  SVG ICON/Manage Icon";

const Page404 = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-[123] flex justify-center items-center">
      <div className="inline-flex flex-col gap-[20px] items-center">
        <Icons.error404 className="w-[150px]" />
        <div className="text-[18px] text-center">404</div>
        <div className="text-[15px] text-center"> It looks like something is missing!</div>
        <Link className="text-[15px] p-5 text-[#fff] bg-[#ee4d2d]  hover:text-[#beacac] rounded-[4px] text-center" to={"/"}>Home Page</Link>
      </div>
    </div>
  );
};

export default Page404;
