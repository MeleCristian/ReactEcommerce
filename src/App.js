import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./componentes/ItemDetail";
import { useList } from "./componentes/useList";

function App() {
  const { Categorias } = useList();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {Categorias.map((cat) => {
          return (
            <Route
              path={`/${cat}`}
              element={<ItemListContainer Filtro={cat} />}
              key={cat}
            />
          );
        })}
        {/* <Route path="/producto/:id" element={<ItemDetail />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
