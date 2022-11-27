import './sass/App.scss';
import { UserLayout } from './components/UserLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CartProvider } from './context/cartContext';
//import { CounterProvider } from './context/counterContext';
import { Cart} from './pages/Cart'

function App() {
  
  return (
    <div className="App">
      <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path={"/category/:categoryId"} element={<Category />} />
                <Route path={"/product/:productId"} element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/NotFoundPage" element={<NotFoundPage/>} />
              </Route>
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
