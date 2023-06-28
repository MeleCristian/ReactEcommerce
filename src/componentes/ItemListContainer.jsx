import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [Productos, SetProductos] = useState([]);
  useEffect(() => {
    fetch("datitos.json")
      .then((response) => response.json())
      .then((datitos) => SetProductos(datitos));
  }, []);
  return <ItemList List={Productos} />;
}

export default ItemListContainer;
