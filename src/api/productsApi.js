import axios from "axios";
import axiosClient from "./axiosClient";

export const productsApi = {
    getAllProducts(params){

        const url = '/products';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
    getProductById(params){

        const url = '/products';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
    getNewProducts(params){

        const url = '/products';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
    getProminentProducts(params){

        const url = '/products';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
}