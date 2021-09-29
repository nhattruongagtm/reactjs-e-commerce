import { configureStore } from "@reduxjs/toolkit";
import loadProductReducer from './loadProductSlice'

export const store = configureStore({
    reducer:{
        loadProduct: loadProductReducer,
    }

});
