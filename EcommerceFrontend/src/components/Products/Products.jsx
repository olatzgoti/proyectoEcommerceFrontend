import { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductState'
import { Spin } from 'antd'

const Products = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  if (!products) return <Spin />

  return products && products.map((product) => (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  ))
}

export default Products