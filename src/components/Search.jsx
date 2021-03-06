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
          <div className="content__sort--title">S???p x???p theo</div>
          <select
            className="content__sort--select"
            value={searchOptionValue}
            onChange={handleSearchOption}
          >
            <option value={value.BEST_SELLER}>B??n ch???y nh???t</option>
            <option value={value.HIGH_RATE}>N???i b???t</option>
            <option value={value.LOW_PRICE}>Gi?? (t??? th???p ?????n cao)</option>
            <option value={value.HIGH_PRICE}>Gi?? (t??? cao ?????n th???p)</option>
            <option value={value.ASC}>T??n (t??? A-Z)</option>
            <option value={value.DESC}>T??n (t??? Z-A)</option>
            <option value={value.OLD_DAY}>Ng??y c??</option>
            <option value={value.NEW_DAY}>Ng??y m???i</option>
          </select>
        </div>
        <form
          className="main__search--content--search"
          onSubmit={handleSearchInputSubmit}
        >
          <div className="search--input">
            <input
              type="text"
              placeholder="Nh???p t??n s???n ph???m c???n t??m..."
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
          <button type="submit" className="search--btn btn">
            <i class="fas fa-search"></i>
            <div className="search--btn--text">T??m ki???m</div>
          </button>
        </form>
      </div>
    </div>
  );
}
