import { Route, Switch } from "react-router";
import "./assets/css/style.css";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import DetailProduct from "./pages/products/DetailProduct";
import Products from "./pages/products/Products";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product">
        <DetailProduct />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
}

export default App;
