import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Primer React App"/>
      <Footer/>
    </>
  );
}

export default App;
