import './sass/App.scss';
import { UserLayout } from './components/UserLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CartProvider } from './context/cartContext';
import { CounterProvider } from './context/counterContext';


function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <CounterProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path={"/category/:categoryId"} element={<Category />} />
                <Route path={"/product/:productId"} element={<Detail />} />
                <Route path="/cart" element={<div>Cart</div>} />
               
              </Route>
            </Routes>
          </BrowserRouter>
        </CounterProvider>
      </CartProvider>
    </div>
  );
}

export default App;
