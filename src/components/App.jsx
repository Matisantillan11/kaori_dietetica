import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddProduct from '../containers/AddProduct.jsx'
import MainPage from '../containers/MainPage.jsx'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    
                    <Route exact path = "/product" component={MainPage} />
                    <Route exact path = "/new" component={AddProduct} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App