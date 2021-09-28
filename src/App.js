import { Route, Switch } from 'react-router';
import './assets/css/style.css';
import CartPage from './pages/cart/CartPage';
import HomePage from './pages/home/HomePage';
import DetailProduct from './pages/products/DetailProduct';

function App() {
  return (
    
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/product">
              <DetailProduct/>
            </Route>
            <Route path="/cart">
              <CartPage/>
            </Route>
          </Switch>
  
  );
}

export default App;
