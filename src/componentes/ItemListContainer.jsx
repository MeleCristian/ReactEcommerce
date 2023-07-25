import { useParams } from "react-router-dom";
import { useList } from "../customHooks/useList";
import ItemList from "./ItemList";

function ItemListContainer() {
  let { Productos } = useList();
  const { cat } = useParams();

  if (cat) {
    Productos = Productos.filter((element) => element.anime === cat);
  }

  return (
    <>
      {Productos.length === 0 ? (
        <h1>LOADING....</h1>
      ) : (
        <ItemList List={Productos} />
      )}
    </>
  );
}

export default ItemListContainer;
