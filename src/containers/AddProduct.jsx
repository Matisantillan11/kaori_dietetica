import React, {useRef, useState} from "react";
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert2'
import firebase from "firebase/app";
import "firebase/database";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/containers/AddProduct.css";

const AddProduct = () => {
  
  const form = useRef(null);
  let history = useHistory();
  
  
  const handleClick = () =>{
    createProduct();
  }
  
  const createProduct = () => {
    const formData = new FormData(form.current)
    const record = {
        description: formData.get('description'),
        name: formData.get('name'),
        price: formData.get('price'),
        stock: formData.get('stock'),
      };

      const db = firebase.firestore()
      const addRef = db.collection("products")
      

      swal.fire({
        text:`Seguro quieres crear el producto "${record.name}"?`,
        showDenyButton:true,
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Aceptar`,
        denyButtonText: '<i class="fa fa-thumbs-down"></i> Cancelar' 
      }).then(result =>{
        if(result.isConfirmed){
          addRef.add(record).then(() =>{
            swal.fire({
              icon:"success",
              title: 'Excelente! 😁',
              html:`El producto <strong>${record.name}</strong> se ha creado con exito`,
              timer: 2000
            })
            history.push("/products");
          })
        } else if (result.isDenied){
          swal.fire({
            icon:"error",
            title: 'Que lastima! 😔',
            html:`El producto <strong>${record.name}</strong> no se ha creado.`,
          })
        }
      })
      
    }
    


  
    return (
      <>
      <div className="main">
          <h3 className="title">Nuevo producto</h3>
          <div className="main_container">

            <div className="form_container">
              <form ref={form}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" name="name"  className="form-control" />
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <input type="text"  name="description" className="form-control" maxLength = "100" />
                </div>
                <div className="form-group">
                  <label >Precio</label>
                  <input type="number"  name="price" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input type="number"  name="stock" className="form-control stock" />
                </div>
              </form>
            </div>

            {/* <h4>Vista previa</h4>
            <div className="real-time">
                  <p className="real-time-title"></p>
                  <p className="real-time-description"></p>
                  <p className="real-time-price"></p>
                  <p className="real-time-stock"></p>
              <div className="product_icons--container">
                <FontAwesomeIcon icon={faTrash}/>
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div> */}
          </div>

          <button className="create-button" onClick={()=>handleClick()}>Crear Producto</button>
          
      </div>
      </>
    );
}
export default AddProduct;
