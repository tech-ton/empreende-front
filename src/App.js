import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/index.js";
import Home from "./pages/home.js"
import Stock from "./pages/stock.js";
import Inventory from "./pages/materialControl.js";
import ShoppingList from "./pages/shoppingList.js";
import ConfigurationPage from "./pages/configurationPage.js";
import PageNotFound from "./components/pageNotFound/index.js";
import HomeBussiness from "./pages/homeBussiness.js";
import HomeBussinessType from "./pages/homeBussinessType.js";
import PageNotFoundBussiness from "./components/pageNotFoundBussiness/index.js";
import Report from "./pages/report.js";
import Estrategy from "./pages/estrategy.js";
import Metas from "./pages/metas.js";
import Pricing from "./pages/pricing.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/negocio" element={<HomeBussiness/>}/>
        <Route path="/home/tiponegocio" element={<HomeBussinessType/>}/>
        <Route path="/home/tiponegocioinvalido" element={<PageNotFoundBussiness/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/relatorio/estrategia" element={<Estrategy/>}/>
        <Route path="/relatorio/meta" element={<Metas/>}/>
        <Route path="/relatorio/precificacao" element={<Pricing/>}/>
        <Route path="/estoque" element={<Stock/>}/>
        <Route path="/estoque/materiais" element={<Inventory/>}/>
        <Route path="/estoque/compras" element={<ShoppingList/>}/>
        <Route path="/configuracoes" element={<ConfigurationPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
