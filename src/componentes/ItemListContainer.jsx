import { useList } from "./useList";
import ItemList from "./ItemList";

function ItemListContainer({ Filtro }) {
  let { Productos } = useList();

  if (Filtro) {
    Productos = Productos.filter((element) => element.anime === Filtro);
  }

  return <ItemList List={Productos} />;
}

export default ItemListContainer;
