import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import value from "../constants/sortValues";
import {
  searchInputProduct,
  searchOptionProduct,
} from "../store/loadProductSlice";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  let valueOption = {
    _sort: "saleNumber",
    _order: "desc",
  };

  const [searchOption, setSearchOption] = useState(valueOption);
  const [searchOptionValue, setSearchOptionValue] = useState(value.BEST_SELLER);


  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  // pre-process
  const preProcessing = (values) =>{
    switch (values) {
        case value.BEST_SELLER:
          valueOption._sort = "saleNumber";
          valueOption._order = "desc";
         return valueOption;
  
        case value.HIGH_RATE:
          valueOption._sort = "rate";
          valueOption._order = "desc";
         return valueOption;
  
        case value.LOW_PRICE:
          valueOption._sort = "price";
          valueOption._order = "asc";
         return valueOption;
  
        case value.HIGH_PRICE:
          valueOption._sort = "price";
          valueOption._order = "desc";
         return valueOption;
  
        case value.ASC:
          valueOption._sort = "name";
          valueOption._order = "asc";
         return valueOption;
  
        case value.DESC:
          valueOption._sort = "name";
          valueOption._order = "desc";
         return valueOption;
  
        case value.OLD_DAY:
          valueOption._sort = "createdAt";
          valueOption._order = "asc";
         return valueOption;
  
        case value.NEW_DAY:
          valueOption._sort = "createdAt";
          valueOption._order = "desc";
         return valueOption;
        default:
         return valueOption;
      }
  }
  const handleSearchOption = (e) => {
    const value = e.target.value;

    setSearchOptionValue(value);
    const newValue = preProcessing(value);
    setSearchOption(newValue)

    console.log(newValue);

    dispatch(searchOptionProduct(newValue));
  };

  const handleSearchInputSubmit = (e) => {
    e.preventDefault();

    dispatch(searchInputProduct(searchInput));
  };

  return (
    <div className="main__search">
      <div className="main__search--ad"></div>
      <div className="main__search--content">
        <div className="main__search--content--sort">
          <div className="content__sort--title">Sắp xếp theo</div>
          <select
            className="content__sort--select"
            value={searchOptionValue}
            onChange={handleSearchOption}
          >
            <option value={value.BEST_SELLER}>Bán chạy nhất</option>
            <option value={value.HIGH_RATE}>Nổi bật</option>
            <option value={value.LOW_PRICE}>Giá (từ thấp đến cao)</option>
            <option value={value.HIGH_PRICE}>Giá (từ cao đến thấp)</option>
            <option value={value.ASC}>Tên (từ A-Z)</option>
            <option value={value.DESC}>Tên (từ Z-A)</option>
            <option value={value.OLD_DAY}>Ngày cũ</option>
            <option value={value.NEW_DAY}>Ngày mới</option>
          </select>
        </div>
        <form
          className="main__search--content--search"
          onSubmit={handleSearchInputSubmit}
        >
          <div className="search--input">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm cần tìm..."
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
          <button type="submit" className="search--btn btn">
            <i class="fas fa-search"></i>
            <div className="search--btn--text">Tìm kiếm</div>
          </button>
        </form>
      </div>
    </div>
  );
}
