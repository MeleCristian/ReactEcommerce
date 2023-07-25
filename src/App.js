import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./componentes/cart";

function App() {
  return (
    <>
      <>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path={`/categorias/:cat`} element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
        <Footer />
      </>
    </>
  );
}

export default App;
