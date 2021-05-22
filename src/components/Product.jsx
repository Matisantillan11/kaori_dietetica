import React, { Component } from 'react'

import firebase from "firebase/app";
import "firebase/database";

import swal from 'sweetalert2'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'


import '../assets/styles/components/Product.css'


class Product extends Component{

    deleteProduct = (e) => {
        const db = firebase.firestore()
        const deleteRef = db.collection("products")
        console.log(this.props.productId)
        swal.fire({
            text:`Seguro quieres eliminar el producto "${this.props.name}"?`,
            showDenyButton:true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            denyButtonText: '<i class="fa fa-thumbs-down"></i> Cancelar' 
        }).then(result =>{
            if(result.isConfirmed){
                deleteRef.doc(this.props.productId).delete().then(()=>{
                    swal.fire({
                        icon:'success',
                        text: 'Producto eliminado correctamente'
                    })
                        
                }).catch(error=>{
                    swal.fire({
                        icon:'error',
                        text: `Lo sentimos, no se pudo borrar tu producto. Error: ${error.message}`
                    })
                })
            } else if (result.isDenied){
                swal.fire({
                    icon:'error',
                    text: 'Producto no eliminado'
                })
            }
        })
    }
    
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
                        <FontAwesomeIcon icon={faTrash} onClick={this.deleteProduct}/>
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
            </>
        )
    }
}

export default Product
