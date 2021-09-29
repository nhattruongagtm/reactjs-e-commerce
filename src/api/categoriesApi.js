import axios from "axios";
import axiosClient from "./axiosClient";

export const categoriesApi = {
    getAllCategories(){

        const url = '/categories';

        return axiosClient.get(url).catch((e)=>{
            console.log(e);
        });
    },
    getProductsInCategory(params){

        const url = '/products';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
}