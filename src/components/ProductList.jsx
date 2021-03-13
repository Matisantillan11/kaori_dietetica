import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/firestore";

import Product from './Product.jsx'

import '../assets/styles/components/ProductList.css'
class ProductList extends Component{
    state={
        loading:true,
        error:false,
        products:[{}],
        productId: []
    }

    listProducts = () =>{
        const db = firebase.firestore()
        const productRef = db.collection("products")

        productRef.onSnapshot(snapshot =>{
                if(snapshot.empty){
                    return <h1>No hay productos</h1>
                } else {
                    snapshot.forEach(product =>{
                        console.log(product.data())
                        this.setState({
                            products:this.state.products.concat(product.data()),
                            productId: this.state.productId.concat(product.id),
                            loading: false,
                            error: false,
                            });  
                    })
                }
            })
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
            {this.state.loading && <p>Loading...</p>}
            {this.state.error && <p>Error...</p>}
                <div className="productList_container">
                    {this.state.products.map((product, i) =>(
                        <Product
                        key={i}
                        productId = {this.state.productId[i]}
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