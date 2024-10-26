import { useState } from "react"


interface IProps {
    status?: boolean,
    product: {
        name: string,
        price: number,
        img: string,
    }
}
const ProductItem = ({product, status}: IProps) => {
    const [title, setTitle] = useState("product item 999")


    return (
      <div className="container" style={{border: '1px solid gray'}}>
        <h1 className="ml-2 text-lg font-semibold">{title}=</h1>
          <h1 className="p-4 bg-blue-400">{product.name}===</h1>
          <strong>{product.price}</strong><br />
          <img src={product.img} width={'90px'} alt="product"/>
          <p>{status ? 'in stock' : 'out of stock'}</p>
          <button onClick={() => setTitle("change to new title")}>change title</button>
        </div>
    )
  }

  export default ProductItem