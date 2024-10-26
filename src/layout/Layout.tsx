import React, { useState } from 'react'
import Promo from '../components/Header/Promo'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = ({ children }: any) => {
    const [carts, setCarts] = useState<any>([]);

    return (
        <main>
            <div>
                <Promo />
            </div>

            <div className='shadow-md'>
                <Header carts={carts} />
            </div>

            {children}

            <div>
                <Footer />
            </div>
        </main>
    )
}

export default Layout