import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { categoriesApi } from "../api/categoriesApi";
import filterValue from "../constants/filterValues";
import {
  changeBrand,
  changeGender,
  changePriceGTE,
  changePriceLTE,
} from "../store/loadProductSlice";

export default function Navigation() {
  const [categories, setCategories] = useState([]);
  // const [numbers,setNumbers] = useState(0);
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState([]);
  const [priceGTE, setPriceGTE] = useState([]);
  const [priceLTE, setPriceLTE] = useState([]);
  const dispatch = useDispatch();

  const isExist = (value, array) => {
    return array.findIndex((item) => {
      return item === value;
    });
  };

  useEffect(() => {
    categoriesApi.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  // số sản phẩm của từng danh mục
  // const numberProductsInCategory = (categoryID) =>{
  //     let result = 0;
  //     categoriesApi.getProductsInCategory({
  //         _limit: 100000,
  //         _page: 1,
  //         categoryID: categoryID
  //     }).then((data)=>{
  //         // result = data.pagination._totalRows;
  //         // setNumbers(result);
  //     })
  // }

  // filter gender
  const handleChangeChecked = (value) => {
    const index = isExist(value, gender);
    let newGender = [...gender];
    index === -1 ? newGender.push(value) : newGender.splice(index, 1);

    setGender(newGender);

    dispatch(changeGender(newGender));
  };

  // filter brand
  const handleChageBrand = (categoryID) => {
    const index = isExist(categoryID, category);
    let newCategory = [...category];
    index === -1 ? newCategory.push(categoryID) : newCategory.splice(index, 1);

    setCategory(newCategory);

    dispatch(changeBrand(newCategory));
  };

  // filter price
  const handleChangePrice = (value) => {
    const price_gte = value.price_gte;
    const price_lte = value.price_lte;

    const index = isExist(price_gte, priceGTE);
    let newGTE = [...priceGTE];
    let newLTE = [...priceLTE];

    index === -1
      ? newGTE.push(price_gte) && newLTE.push(price_lte)
      : newGTE.splice(index, 1) && newLTE.splice(index, 1);

    setPriceGTE(newGTE);
    setPriceLTE(newLTE);

    dispatch(changePriceGTE(newGTE));
    dispatch(changePriceLTE(newLTE));
  };

  console.log(priceGTE);
  console.log(priceLTE);

  return (
    <div className="main__nav">
      <div className="nav__item">
        <div className="nav__item--cat">
          <div className="nav__item--cat--title nav__item--cat--title--mobile">Lọc sản phẩm</div>
          <label htmlFor="filter__gender" className="nav__item--cat--title gender">Giới tính<span><i class="fas fa-angle-down"></i></span></label>
          <input type="checkbox" id="filter__gender" hidden/>
          <div className="nav__item--cat--items items__gender">
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value="0"
                  onChange={() => handleChangeChecked(0)}
                />
                Nam
              </div>
              <div className="cat_item_number">(695)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value="1"
                  onChange={() => handleChangeChecked(1)}
                />
                Nữ
              </div>
              <div className="cat_item_number">(180)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value="2"
                  onChange={() => handleChangeChecked(2)}
                />
                Uniset
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
          </div>
        </div>
        <div className="nav__item--cat">
          <label htmlFor="filter__brand" className="nav__item--cat--title">Thương hiệu<span><i class="fas fa-angle-down"></i></span></label>
          <input type="checkbox" id="filter__brand" hidden/>
          <div className="nav__item--cat--items items--brand">
            {categories.map((item) => {
              return (
                <div className="cat__item" key={item.id}>
                  <div className="cat_item_type">
                    <input
                      type="checkbox"
                      value={item.id}
                      onChange={() => handleChageBrand(item.id)}
                    />
                    {item.categoryName}
                  </div>
                  <div className="cat_item_number">(25)</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="nav__item--cat">
          <label htmlFor="filter__price" className="nav__item--cat--title">Giá <span><i class="fas fa-angle-down"></i></span></label>
          <input type="checkbox" id="filter__price" hidden/>
          <div className="nav__item--cat--items items--price">
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B0_5}
                  onChange={() =>
                    handleChangePrice({ price_gte: 0, price_lte: 500000 })
                  }
                />
                Dưới 500.000₫
              </div>
              <div className="cat_item_number">(695)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B5_1}
                  onChange={() =>
                    handleChangePrice({ price_gte: 500000, price_lte: 1000000 })
                  }
                />
                500.000₫ - 1.000.000₫
              </div>
              <div className="cat_item_number">(180)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B1_2}
                  onChange={() =>
                    handleChangePrice({
                      price_gte: 1000000,
                      price_lte: 2000000,
                    })
                  }
                />
                1.000.000₫ - 2.000.000₫
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B3_4}
                  onChange={() =>
                    handleChangePrice({
                      price_gte: 2000000,
                      price_lte: 3000000,
                    })
                  }
                />
                2.000.000₫ - 3.000.000₫
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B3_4}
                  onChange={() =>
                    handleChangePrice({
                      price_gte: 3000000,
                      price_lte: 4000000,
                    })
                  }
                />
                3.000.000₫ - 4.000.000₫
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B4_5}
                  onChange={() =>
                    handleChangePrice({
                      price_gte: 4000000,
                      price_lte: 5000000,
                    })
                  }
                />
                4.000.000₫ - 5.000.000₫
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
            <div className="cat__item">
              <div className="cat_item_type">
                <input
                  type="checkbox"
                  value={filterValue.B5_8}
                  onChange={() =>
                    handleChangePrice({
                      price_gte: 5000005,
                      price_lte: 1000000000,
                    })
                  }
                />
                Trên 5.000.000₫
              </div>
              <div className="cat_item_number">(210)</div>
            </div>
          </div>
        </div>
        {/* <div className="nav__item--cat">
                    <div className="nav__item--cat--title">
                        Phần trăm giảm
                    </div>
                    <div className="nav__item--cat--items">
                        <div className="cat__item">
                            <div className="cat_item_type"><input type="checkbox"/>Trên 50%</div>
                            <div className="cat_item_number">(695)</div>
                        </div>
                        <div className="cat__item">
                            <div className="cat_item_type"><input type="checkbox"/>40% - 50%</div>
                            <div className="cat_item_number">(180)</div>
                        </div>
                        <div className="cat__item">
                            <div className="cat_item_type"><input type="checkbox"/>30% - 40%</div>
                            <div className="cat_item_number">(210)</div>
                        </div>
                        <div className="cat__item">
                            <div className="cat_item_type"><input type="checkbox"/>20% - 30%</div>
                            <div className="cat_item_number">(210)</div>
                        </div>
                    </div>
                </div> */}
      </div>
      <label htmlFor="products__nav" className="filter__close">
        <i class="far fa-times-circle"></i>
      </label>
    </div>
  );
}
