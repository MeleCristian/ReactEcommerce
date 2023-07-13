import { useList } from "../customHooks/useList";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const { Productos } = useList();
  const Producto = Productos.filter((element) => element.id === Number(id));
  return (
    <>
      {Productos.length === 0 ? (
        <h1>LOADING....</h1>
      ) : (
        Producto.map((element) => (
          <ItemDetail Item={element} key={element.id} />
        ))
      )}
    </>
  );
}
export default ItemDetailContainer;
