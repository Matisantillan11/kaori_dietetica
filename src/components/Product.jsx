import React, { Component } from 'react'

import firebase from "firebase/app";
import "firebase/database";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'


import '../assets/styles/components/Product.css'


class Product extends Component{
    render(){
        return(
            <>
                <div className="product_container">
                    <div className="product_text--container">
                        <h4 className="product_text--title">{this.props.name}</h4>
                        <p className="product_text--description">{this.props.description}</p>
                        <p>${this.props.price}</p>
                    </div>
                    <div className="product_icons--container">
                        <FontAwesomeIcon icon={faTrash} onClick={this.props.delete}/>
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
            </>
        )
    }
}

export default Product
