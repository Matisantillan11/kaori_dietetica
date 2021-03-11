import React from "react";


import "../assets/styles/containers/HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <h1 className="home__title">Bienvenidos a Dietetica Kaori</h1>
          <div className="home__container">
            <div className="home__container-image">
              <img src="" alt="" />
            </div>
            <a className="home__container-button" href="/login">
              Comenzar
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
