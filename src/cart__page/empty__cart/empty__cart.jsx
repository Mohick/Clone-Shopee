import { Link } from "react-router-dom"

const Emptycart = ()=>{


    return <div className="h-[50vh] mt-[50px]">
        <div className="layout flex items-center h-full justify-center flex-col gap-[20px]">
            <div className="w-[150px] h-[150px]">
                <img src="./cart__empty/cart__empty.png" width={"100%"} height={"100%"} alt="" />
            </div>
            <div className="text-[13px]">Giỏ hàng của bạn còn trống</div>
            <Link to={"/"} className="text-[15px] text-[#fff] cursor-pointer hover:bg-[#e3b2a8] p-[10px] bg-[#ee4d2d]">Mua Ngay</Link>
        </div>
    </div>
}


export default Emptycart