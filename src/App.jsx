import React from "react";
import { ItemList } from "./components/itemlist";

import { Navbar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import { ShoppingCart } from "./components/shoppingcart";
import { ShoppingCartProvider } from "./contex/shopppingcartcontext";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};