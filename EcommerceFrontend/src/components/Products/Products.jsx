import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductState';
import { Spin, Card, Button, Modal } from 'antd';
import { ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import './Products.style.scss';

const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cartProduct, setCartProduct] = useState([]);
  
  useEffect(() => {
    getProducts();
   // localStorage.setItem("cart", JSON.stringify(cart));
  }, []
  );
const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showProduct = (product) => {
    setSelectedProduct(product);
    showModal();
  };

  const chooseProduct = (product)=>{
  localStorage.setItem("cart", JSON.stringify([...cartProduct, product]));
  setCartProduct([...cartProduct, product])
  
  }


  if (!products) return <Spin />;

  return (
    <>
        <div className='products'>
          {products.map((product) => (
            <div key={product.id}>
              <section className='products__product-card'>
                <Card style={{ width: 300 }}>
                  <p>{product.name}</p>
                  <p className='products__product-card__price'>{product.price}€</p>
                  <Button onClick={() => showProduct(product)}><ProductOutlined /></Button>
                  <Button onClick={() => chooseProduct(product)}><ShoppingCartOutlined/></Button>
                </Card>
              </section>
            </div>
          ))}
      </div>

      {selectedProduct && (
        <Modal
          keyboard={true}
          centered={true}
          footer={null}
          title={selectedProduct.name}
          open={isModalOpen}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{selectedProduct.Category.name}</p>
          <p>{selectedProduct.price}€</p>
        </Modal>
      )}
    </>
  );
};

export default Products;