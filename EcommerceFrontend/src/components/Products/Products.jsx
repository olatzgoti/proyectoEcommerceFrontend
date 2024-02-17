import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductState'
import { Spin, Card, Button, Modal, Alert } from 'antd'
import { ProductOutlined } from '@ant-design/icons'
import './Products.style.scss'
import Product from './Product'

const Products = () => {
  const { products, getProducts } = useContext(ProductContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getProducts()
  }, [])

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showProduct = (product) => {
    console.log(product);
    // setIsModalVisible(true);
    return (
      <>
        <Product />
      </>
    )
  }

  if (!products) return <Spin />

  return (
    <>
      { products && products.map((product) => (
        <div>
          <section key={product.id} className='product-card' >
              <Card style={{ width: 300 }} >
                <p>{product.name}</p>
                <p className='product-card__price'>{product.price}€</p>
                <button onClick={() =>{ 
                  showModal
                  showProduct(product)
                  return <Alert message='mensaje' type='success'/> }}><ProductOutlined /></button>
              </Card>
          </section>
        </div>
      ))}

    </>
  )
}

export default Products