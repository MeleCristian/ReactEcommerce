import { ItemCounts } from "./ItemCounts";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ItemDetail({ Item }) {
  const { addItem } = useContext(CarritoContext);
  const [quantity, setQuantity] = useState(0);
  const onAdd = (value) => {
    addItem(Item, value);

    setQuantity(value);
  };

  return (
    <>
      <h2>{Item.producto}</h2>
      <img src={Item.imagen} alt={Item.producto} width={300} height={300} />
      <div>Anime:{Item.anime}</div>
      <div>Precio:{Item.precio}</div>
      <div>Stock:{Item.stock}</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        cupiditate in. Consequatur itaque eos libero molestiae fugiat magnam
        temporibus quis quae, doloribus maiores distinctio aperiam cum
        voluptatibus architecto voluptate porro.
      </div>
      {quantity > 0 ? (
        <Link to="/cart">
          <Button variant="primary">Ir al carrito</Button>
        </Link>
      ) : (
        <ItemCounts Item={Item} onAdd={onAdd} />
      )}
    </>
  );
}
export default ItemDetail;
