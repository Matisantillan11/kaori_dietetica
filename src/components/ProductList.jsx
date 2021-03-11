import React, { Component } from 'react'

import Product from './Product.jsx'

import '../assets/styles/components/ProductList.css'
class ProductList extends Component{
    render(){
        return(
            <>
                <div className="productList_container">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </>
        )

    }
}

export default ProductList