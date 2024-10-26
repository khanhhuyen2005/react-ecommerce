// import ProductItem from "./ProductItem";

import { useState } from "react";


const ProductList = ({ addToCart }: any) => {

    const [products, setProducts] = useState([
        { id: 1, name: "product 1", price: 2000 },
        { id: 2, name: "product 2", price: 2000 },
        { id: 3, name: "product 3", price: 2000 },
        { id: 4, name: "product 4", price: 2000 },
    ]);
    // console.log(items)


    return (
        <div className='container mx-auto mt-9 grid grid-cols-4'>
            {
                products.map((product, index) => {
                    return (
                        <div className='border' key={product.id}>
                            <div className='mb-2'>
                                <h4>{product.name}</h4>
                                <img src="" alt="" />
                                <strong>{product.price}</strong>
                            </div>
                            <button onClick={() => addToCart(product)} className='bg-blue-600 px-4 py-2 rounded-md text-white'>add to cart</button>
                        </div>
                    );
                })
            }
        </div>
    );
}


export default ProductList;