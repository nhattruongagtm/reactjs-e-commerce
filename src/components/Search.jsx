import React from 'react'

export default function Search() {
    return (
        <div className="main__search">
            <div className="main__search--ad"></div>
            <div className="main__search--content">
                <div className="main__search--content--sort">
                    <div className="content__sort--title">Sắp xếp theo</div>
                    <select className="content__sort--select">
                        <option value="ban-chay" selected>Bán chạy nhất</option>
                        <option value="noi-bat">Nổi bật</option>
                        <option value="gia-thap">Giá (từ thấp đến cao)</option>
                        <option value="gia-cao">Giá (từ cao đến thấp)</option>
                        <option value="a-z">Tên (từ A-Z)</option>
                        <option value="z-a">Tên (từ Z-A)</option>
                        <option value="ngay-cu">Ngày cũ</option>
                        <option value="ngay-moi">Ngày mới</option>
                    </select>
                </div>
                <div className="main__search--content--search">
                    <div className="search--input">
                        <input type="text" placeholder="Nhập tên sản phẩm cần tìm..."/>
                    </div>
                    <div className="search--btn">
                        <i class="fas fa-search"></i>
                        <div className="search--btn--text">Tìm kiếm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
