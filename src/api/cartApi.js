import axiosClient from "./axiosClient";

export const cartApi = {
    addToCart(params){

        const url = '/carts';

        return axiosClient.post(url,params).catch((e)=>{
            console.log(e);
        });
    },
    deleteCart(id){

        const url = '/carts/'+id;

        return axiosClient.delete(url).catch((e)=>{
            console.log(e);
        });
    },
    loadProductCart(params){

        const url = '/carts';

        return axiosClient.get(url,{params}).catch((e)=>{
            console.log(e);
        });
    },
    updateCart(id,params){

        const url = '/carts/'+id;

        return axiosClient.patch(url,params).catch((e)=>{
            console.log(e);
        });
    },
   
}