import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
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
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
