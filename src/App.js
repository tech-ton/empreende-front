import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/index.js";
import Home from "./pages/home.js"
import Stock from "./pages/stock.js";
import Inventory from "./pages/materialControl.js";
import ShoppingList from "./pages/shoppingList.js";
import AddToShoppingList from "./pages/addToShoppingList.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/estoque" element={<Stock/>}/>
        <Route path="/materiais" element={<Inventory/>}/>
        <Route path="/compras" element={<ShoppingList/>}/>
        <Route path="/solicitarmaterial" element={<AddToShoppingList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
