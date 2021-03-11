import React from "react";

import ProductList from "../components/ProductList.jsx"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import "../assets/styles/containers/MainPage.css";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="product__hero">

          <h1 className="product_hero-title">Gestión de productos</h1>
        </div>

        
        <a className="product_buttons-new" href="/new">
            <FontAwesomeIcon icon={faPlus} />
        </a>

        <div className="products__container">
            <ProductList />
        </div>
       
        
      </React.Fragment>
    );
  }
}
export default MainPage;
