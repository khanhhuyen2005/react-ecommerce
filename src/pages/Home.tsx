import React, { useState } from 'react'
import Navbar from '../components/Main/Navbar'
import ProductList from '../components/ProductList'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const HomePage = () => {
    const [carts, setCarts] = useState<any>([]);

    const addToCart = (item: any) => {
        // console.log(item)
        const newItem = JSON.parse(JSON.stringify(carts))
        const exist = newItem.filter((x: any) => x.id === item.id);
        if (exist.length === 0) {
            newItem.push(item)
            setCarts(newItem)

        }

    }

    return (
        <Layout>

            <>
               
                <div className='bg-gray-100 mt-1'>
                    <Navbar />

                    <ProductList addToCart={addToCart} />
                    <Link to="/about">about</Link> | <Link to="/products">Products</Link>

                </div>


                {/* footer  */}
            </>


        </Layout>
    )
}

export default HomePage