import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'  
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import * as Constants from "./utils/constants";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
    <div className="App dark-theme">
      <Routes>
                <Route path = {Constants.PAGE_ROUTES.DEFAULT} element={<Home />}></Route> 
                <Route path = {Constants.PAGE_ROUTES.LOGIN} element={<Login />}></Route> 
                <Route path = {Constants.PAGE_ROUTES.REGISTER} element = {<Register />}></Route> 
                <Route path = {Constants.PAGE_ROUTES.PRODUCTLIST} element = {<ProductList />}></Route> 
                <Route path = {Constants.PAGE_ROUTES.CART} element = {<Cart />}></Route> 

      </Routes>
    </div>
    </Router>
  );
}

export default App;