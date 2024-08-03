import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Logo } from "./components/logo";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { Flowers } from "./pages/flowers/flowers";
import { Cart } from "./pages/cart/cart";
import { success } from "./pages/success";
import { cancel } from "./pages/cancel";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/flowers" element={<Flowers/>}/>
          <Route path="/success" element ={<success/>}/>
          <Route path="/cancel" element ={<cancel/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
