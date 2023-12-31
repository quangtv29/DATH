import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './CreateProduct';
const ListProduct = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSanPham = async () => {
      try {
        const response = await axios.get('/api/sanpham');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSanPham();
  }, []);

  const handleSelectProduct = (product) => {
    // console.log(product)
    setSelectedProduct(product);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`/api/sanpham/${productId}`);
      console.log(response.data);
      // Xử lý kết quả trả về khi xóa thành công
      toast.success('Xóa sản phẩm thành công');
      window.location.reload();
    } catch (error) {
      console.error(error);
      // Xử lý lỗi khi xóa không thành công
      toast.error('Xóa sản phẩm thất bại');
    }
  };

  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  //   window.location.href = '/admin/create-product';
  // };

  return (
    <div className="contai">
      {/* <div className='mb-3'>
        <button class="btn btn-navbar" type="button" onClick={(e) => handleAddProduct(e)}>
          <i class="fas fa-plus"></i>Thêm sản phẩm
        </button>
      </div> */}
      <div className="row">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Số lượng</th>
                <th>Giá nhập</th>
                <th>Giá bán</th>
                <th>Mã LSP</th>
                <th>NSX</th>
                <th>Mô tả</th>
                <th>Hình ảnh</th>
                <th colspan="2">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.MaSP} onClick={() => handleSelectProduct(item)}>
                  <td>{item.MaSP}</td>
                  <td>{item.TenSP}</td>
                  <td>{item.SoLuong}</td>
                  <td>{item.GiaNhap}</td>
                  <td>{item.GiaBan}</td>
                  <td>{item.MaLoaiSP}</td>
                  <td>{item.NSX}</td>
                  <td>{item.MoTa}</td>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.TenSP}
                      className="fixImage"
                    />
                  </td>
                  <td>
                    <i
                      class="fad fa-edit"
                      onClick={() => handleEditProduct(item.MaSP)}
                    ></i>
                  </td>
                  <td>
                    <i
                      class="fad fa-trash-alt"
                      onClick={() => handleDeleteProduct(item.MaSP)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          {selectedProduct ? (
            <CreateProduct product={selectedProduct} isEditing={isEditing} />
          ) : (
            <CreateProduct />
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
