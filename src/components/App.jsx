import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';
import AddProduct from '../containers/AddProduct.jsx'
import MainPage from '../containers/MainPage.jsx'

const App = () =>{
    const initialState = useInitialState();
    const isEmpty = Object.keys(initialState.state).length; 

        return(
            <>
             {isEmpty > 0 ? (
                
                <AppContext.Provider value={initialState}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = "/products" component={MainPage} />
                            <Route exact path = "/new" component={AddProduct} />
                        </Switch>
                    </BrowserRouter>
                </AppContext.Provider>
             ) : <h1> Cargando...</h1>}
             </>
        )
}

export default App