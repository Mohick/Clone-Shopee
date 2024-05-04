import { memo } from "react";
import'./Render Items  Shopee Small Max-width 600px.css';
import './Render Items  Shopee Small Min-width 1000px.css'

function RenderItemsShopeeSmallMainPage({arrayItems=[]}) {
    
    return arrayItems.map((items,index)=>{
        return (
            <div className="shopee__small__body__box--items" key={index}>
                <div className="shopee__small__body__box__items--img" style={{
                    background:`url("${items.url}")`,
                    backgroundSize:`contain`,
                    backgroundRepeat:`no-repeat`,
                    backgroundPosition:`top center`
                }} >
                    
                </div>
                <div className="shopee__small__body__box__items--title">{items.name}</div>
            </div>
        )
    })
}


export default memo(RenderItemsShopeeSmallMainPage)