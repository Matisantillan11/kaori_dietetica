import React, { useContext } from 'react'


import Product from './Product.jsx'
import AppContext from '../context/AppContext.js'

import '../assets/styles/components/ProductList.css'
const ProductList = () =>{

    const { product } = useContext(AppContext);
        return(
            <>
                <div className="productList_container">
                    {product.map((product, i) =>(
                     <Product
                        key={product.id}
                        productId = {product.id}
                        name={product.products.name}
                        description={product.products.description}
                        price={product.products.price}
                        />
                    ))}
                </div>
            </>
        )
}

export default ProductList