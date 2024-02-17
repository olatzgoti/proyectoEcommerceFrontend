import { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductState'
import { Spin, Card, Col, Row } from 'antd'
import './Products.style.scss'

const Products = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  if (!products) return <Spin />

  return products && products.map((product) => (
    <div key={product.id} className='product-card'>
      <Col span={8}>
        <Card style={{ width: 300 }}>
          <p>{product.name}</p>
          <p className='product-card__price'>{product.price}€</p>
        </Card>
      </Col>
    </div>
  ))
}

export default Products