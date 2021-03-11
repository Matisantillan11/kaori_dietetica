import React, { Component } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/components/Product.css'

class Product extends Component{
    render(){
        return(
            <>
                <div className="product_container">
                    <div className="product_text--container">
                        <h1 className="product_text--title">Nombre del producto</h1>
                        <p className="product_text--description">Descripcion del producto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex quaerat dicta provident a minus quidem distinctio. Facilis, obcaecati. Aliquam.
                        </p>
                        <p>$$$$$$$$$</p>
                    </div>
                    <div className="product_icons--container">
                        <FontAwesomeIcon icon={faTrash} />
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
            </>
        )
    }
}

export default Product
