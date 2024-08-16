import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/index.js";
import Home from "./pages/home.js"
import Stock from "./pages/stock.js";
import Inventory from "./pages/materialControl.js";
import ShoppingList from "./pages/shoppingList.js";
import AddToShoppingList from "./pages/addToShoppingList.js";
import ConfigurationPage from "./pages/configurationPage.js";
import NewApp from "./pages/newStyle.js";
import ShopItens from "./pages/shoppingItens.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/estoque" element={<Stock/>}/>
        <Route path="/estoque/materiais" element={<Inventory/>}/>
        <Route path="/estoque/compras" element={<ShoppingList/>}/>
        <Route path="/estoque/compras/itens" element={<ShopItens/>}/>
        <Route path="/solicitarmaterial" element={<AddToShoppingList/>}/>
        <Route path="/configuracoes" element={<ConfigurationPage/>}/>
        <Route path="/new" element={<NewApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
