import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/chekoutPage';
import OrdersPage from './pages/ordersPage';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { cartReducer, productReducer, orderReducer, userReducer } from './reducers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailsPage from './pages/productDetailsPage';





const store = configureStore(
  {
    reducer: {

      product: productReducer,
      cart: cartReducer,
      order : orderReducer,
      user : userReducer,

    }
  }
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="myorders" element={<OrdersPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </Router>

    </Provider>
  </React.StrictMode>
);

