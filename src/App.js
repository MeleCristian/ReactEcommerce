import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";
import ProductCards from "./componentes/ProductCards";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Primer React App" />
      <ProductCards />
      <Footer />
    </>
  );
}

export default App;
