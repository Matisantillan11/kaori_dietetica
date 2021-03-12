import React from "react";

import swal from 'sweetalert2'
import firebase from "firebase/app";
import "firebase/database";

import image from '../assets/images/select.svg'

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/containers/AddProduct.css";
class AddProduct extends React.Component {
  state={
    name:'',
    price:'',
    stock:'',
    description:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e =>{
    e.preventDefault();
    this.createProduct();
  }

  createProduct = () => {
      
      const record = {
        description: this.state.description,
        name: this.state.name,
        price: this.state.price,
        stock: this.state.stock
      };
      const db = firebase.firestore()
      const addRef = db.collection("products")
      

      swal.fire({
        text:`Seguro quieres crear el producto "${this.state.name}"?`,
        showDenyButton:true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Crear',
        denyButtonText: '<i class="fa fa-thumbs-down"></i> No crear' 
      }).then(result =>{
        if(result.isConfirmed){
          addRef.add(record).then(product =>{
            swal.fire({
              icon:"success",
              title: 'Excelente! 😁',
              html:`El producto <strong>${this.state.name}</strong> se ha creado con exito`,
            })
            window.location.href = "/product"
          })
        } else if (result.isDenied){
          swal.fire({
            icon:"error",
            title: 'Que lastima! 😔',
            html:`El producto <strong>${this.state.name}</strong> no se ha creado.`,
          })
        }
      })
      
    }
    


  render() {
    return (
      <div className="main">
        <div className="form">
          <h3 className="form--title">Nuevo producto</h3>
          <div className="row">
            <div className="col-6">
              <img className="select-img" src={image} alt="animation" />
            </div>
            <div className="col-6">
              <form>
                <div className="form-group">
                  <label>Nombre</label>
                  <input onChange={this.handleChange} type="text" name="name"  className="form-control" />
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <input onChange={this.handleChange} type="text"  name="description" className="form-control" />
                </div>
                <div className="form-group">
                  <label for="price">Precio</label>
                  <input onChange={this.handleChange} type="number"  name="price" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input onChange={this.handleChange} type="number"  name="stock" className="form-control stock" />
                  {/*  {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                  )} */}
                </div>
                <button className="create-button" onClick={this.handleClick}>Crear Producto</button>
                <button className="prev-button">Vista previa</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddProduct;
