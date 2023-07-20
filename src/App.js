import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { useList } from "./customHooks/useList";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./componentes/cart";
//import { useState } from "react";
/* import {
  getFireStore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore"; */

function App() {
  const { Categorias } = useList();
  return (
    <>
      <>
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />

            {Categorias.map((cat) => {
              return (
                <Route
                  path={`/${cat}`}
                  element={<ItemListContainer Filtro={cat} />}
                  key={cat}
                />
              );
            })}
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
        <Footer />
      </>
    </>
  );
}

export default App;
