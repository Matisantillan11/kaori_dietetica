import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/database";


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
        e.preventDefault()
        const deleteRef = firebase.database().ref().child("products").child(`"${this.state.productId}"`);
        deleteRef.remove(error =>{
            if(!error){
                swal.fire({
                    icon:'success',
                    text: 'Producto eliminado correctamente'
                })
                this.listProducts(firebase.database().ref("products"))
            } else {

                swal.fire({
                    icon:'error',
                    text: `Lo sentimos, no se pudo borrar tu producto. Error: ${error.message}`
                })
            }
        }) 
    }

    listProducts = (dbref) =>{

        dbref.on("child_added", (snapshot) => {
            console.log(snapshot.key)
            this.setState({
            products: this.state.products.concat(snapshot.val()),
            productId: snapshot.key,
            loading: false,
            error: false,
            });
            
        });
    }
    componentDidMount() {
        this.setState({
            products: [],
            loading: true,
            error: false,
        });
    
        const db = firebase.database()
        const dbref = db.ref("products");
        this.listProducts(dbref)
        dbref.on("child_removed", () => {
            this.listProducts(dbref)
        })
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