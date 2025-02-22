import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import Success from "./components/Success";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState(null);

  const handleOrderData = (d) => {
    setOrderData(d);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/siparis-olustur">
          <OrderPizza onSubmit={handleOrderData} />
        </Route>
        <Route path="/siparis-alindi">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
