import React from "react";

import ProductList from "../components/ProductList.jsx"

import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import "../assets/styles/containers/MainPage.css";
import initialState from "../initialState.js";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="product__hero">

          <h1 className="product_hero-title">Gestión de productos</h1>
        </div>

        
        <Link className="product_buttons-new" to="/new">
            <FontAwesomeIcon icon={faPlus} />
        </Link>

        <div className="products__container">
            <ProductList products={initialState.products}/>
        </div>
       
        
      </React.Fragment>
    );
  }
}
export default MainPage;
