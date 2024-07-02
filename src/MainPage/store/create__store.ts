import axios from 'axios'
import { create } from 'zustand'

type Options = {
    itemsBanner: [],
    itemsSiteEvent: [],
    itemsCategories: [],
    itemsBannerSmall: [],
    itemsFlashSales: [],
    itemsTopProducts: [],
    itemsDailyPages: [],
    callAllApiMainPage: () => void
    allow:boolean
}


const reducerBanner = create<Options>((set) => ({
    itemsBanner: [],
    itemsSiteEvent: [],
    itemsCategories: [],
    itemsFlashSales: [],
    itemsBannerSmall: [],
    itemsTopProducts: [],
    itemsDailyPages: [],
    allow:false,
    callAllApiMainPage: async () => {
        await Promise.all([
            axios.get('https://json-be-shopee.onrender.com/api__banner__side__event'),
            axios.get('https://json-be-shopee.onrender.com/site__events__main__page'),
            axios.get('https://json-be-shopee.onrender.com/api__categores__main__page'),
            axios.get('https://json-be-shopee.onrender.com/flash__sell__main__page'),
            axios.get('https://json-be-shopee.onrender.com/banner__small/'),
            axios.get('https://json-be-shopee.onrender.com/top__products__main__page'),
            axios.get('https://json-be-shopee.onrender.com/api__daily')
        ]).then(([itemsBanner, itemsSiteEvent,itemsCategories,itemsFlashSales,itemsBannerSmall,itemsTopProducts,itemsDailyPages]) => {
            return set(({
                itemsBanner: itemsBanner.data,
                itemsSiteEvent: itemsSiteEvent.data,
                itemsCategories: itemsCategories.data,
                itemsFlashSales: itemsFlashSales.data,
                itemsBannerSmall: itemsBannerSmall.data,
                itemsTopProducts: itemsTopProducts.data,
                itemsDailyPages: itemsDailyPages.data,
                allow: true,
            }))
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    },
}));


export default reducerBanner