import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
// import watch from '../assets/images/watch.jpg';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart, updateCart } =
    useContext(CartContext);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };
  const handleUpdateCart = (event, item) => {
    const quantity = parseInt(event.target.value);
    const updatedQuantity = Math.min(Math.max(quantity, 1), 10);
    updateCart(item, updatedQuantity);
  };
  return (
    <>
      <Meta title={'Giỏ Hàng'} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Sản phẩm</h4>
              <h4 className="cart-col-2">Giá bán</h4>
              <h4 className="cart-col-3">Số lượng</h4>
              <h4 className="cart-col-4">Tổng tiền</h4>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.MaSP}
                className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
              >
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={item.imageUrl}
                      className="img-fluid"
                      alt="ảnh sản phẩm"
                    />
                  </div>
                  <div className="w-75">
                    <p>{item.TenSP}</p>
                    <p>Size: Không có</p>
                    <p>Màu: Không có</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">
                    {item.GiaBan.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                      value={item.quantity}
                      onChange={(event) => handleUpdateCart(event, item)}
                    />
                  </div>
                  <div>
                    <AiFillDelete
                      className="text-danger"
                      onClick={() => handleRemoveFromCart(item)}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    {item.prices.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Tiếp tục mua sắm
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>
                  Tổng tiền:{' '}
                  {totalPrice.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
