import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import { Reset } from "styled-reset";
import OrderCompletePage from "./pages/OrderCompletePage";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <div className="App">
      <Reset />
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path={staticServerUri + "/login"} element={<LoginPage />}></Route>
          <Route path={staticServerUri + "/signup"} element={<RegisterPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUri + "/"} element={<HomePage />}></Route>
            <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage />}></Route>
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUri + "/cart"} element={<CartPage />}></Route>
            <Route path={staticServerUri + "/order"} element={<OrderPage />}></Route>
            <Route
              path={staticServerUri + "/orders/complete/:id"}
              element={<OrderCompletePage />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
