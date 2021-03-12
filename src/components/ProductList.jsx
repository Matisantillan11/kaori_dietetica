import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/firestore";


import Product from './Product.jsx'

import swal from 'sweetalert2'

import '../assets/styles/components/ProductList.css'
class ProductList extends Component{
    state={
        loading:true,
        error:false,
        products:[{}],
        productId: ''
    }
    
    deleteProduct = (e) => {
        const db = firebase.firestore()
        const deleteRef = db.collection("products")
        console.log(this.state.productId)
        swal.fire({
            text:`Seguro quieres eliminar el producto "${this.state.products.name}"?`,
            showDenyButton:true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Crear',
            denyButtonText: '<i class="fa fa-thumbs-down"></i> No crear' 
        }).then(result =>{
            if(result.isConfirmed){
                deleteRef.doc(this.state.productId).delete().then(()=>{
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
                this.listProducts();
            } else if (result.isDenied){
                swal.fire({
                    icon:'error',
                    text: 'Producto no eliminado'
                })
            }
        })
    }


    listProducts = () =>{
        const db = firebase.firestore()
        const productRef = db.collection("products")

        productRef.get().then(snapshot=>{
            snapshot.forEach(product =>{
                if(product.exists){
                    this.setState({
                        products: this.state.products.concat(product.data()),
                        productId: product.id,
                        loading: false,
                        error: false,
                        }); 
                } 
                })
            }).catch(error => console.log(error.message))
        }
        
    
    componentDidMount() {
        this.setState({
            products: [],
            loading: true,
            error: false,
        });
        
        this.listProducts()
        
        
    }

    render(){
        return(
            <>
                <div className="productList_container">
                    {this.state.products.map((product, i) =>(

                        <Product
                        key={i}
                        productId = {this.state.productId}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        delete={this.deleteProduct}
                        />
                    ))} 
                </div>
            </>
        )

    }
}

export default ProductList