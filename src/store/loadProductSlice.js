import { createSlice } from "@reduxjs/toolkit";
import value from "../constants/sortValues";

const limit = 100;

const initialState = {
    _page: 1,
    _limit: limit,
    name_like: '',
    _sort: value.BEST_SELLER,
    _order: 'desc',
    categoryID: [],
    gender: [],
    price_gte: [],
    price_lte: [],
    
}
export const loadProductSlice = createSlice({
    name: 'loadProduct',
    initialState,
    reducers:{
        searchInputProduct(state,action){
            state.name_like = action.payload;
            state._page = 1;
        },
        searchOptionProduct(state,action){

            state._sort = action.payload._sort;
            state._order = action.payload._order;
        },
        changePage(state,action){
            state._page= action.payload;
        },
        changePagePrevious(state){
            state._page= state._page-1;
        },
        changePageNext(state){
            state._page= state._page+1;
        },
        changeGender(state,action){
            state.gender = action.payload;
        },
        changeBrand(state,action){
            state.categoryID = action.payload;
        },
        changePriceGTE(state,action){
            state.price_gte = action.payload;
        },
        changePriceLTE(state,action){
            state.price_lte = action.payload;
        }
    }

})

const {reducer,actions} = loadProductSlice;

export const {searchInputProduct,searchOptionProduct,changePage,changePageNext,changePagePrevious,changeGender,changeBrand,changePriceGTE,changePriceLTE} = actions;

export default reducer;