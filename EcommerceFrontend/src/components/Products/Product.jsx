import { Alert, Modal } from "antd";
import { ProductContext } from '../../context/ProductState'

const Product = ({product, onSelect}) => {

  return (
    // <Modal title="Edit Product" open={visible} footer={[]} onCancel={onFinish}>
    //   <p>{product.name}</p>
    //   <p>{product.price}</p>
    //   <button onClick={handleClick}>View Details</button>
    // </Modal>
    <Alert message='mensaje' type='success'/>
  )
}

export default Product