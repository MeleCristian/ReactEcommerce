import { ItemCounts } from "./ItemCounts";

function ItemDetail({ Item }) {
  return (
    <>
      <h2>{Item.producto}</h2>
      <img src={Item.imagen} alt={Item.producto} />
      <div>Anime:{Item.anime}</div>
      <div>Precio:{Item.precio}</div>
      <div>Stock:{Item.stock}</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        cupiditate in. Consequatur itaque eos libero molestiae fugiat magnam
        temporibus quis quae, doloribus maiores distinctio aperiam cum
        voluptatibus architecto voluptate porro.
      </div>

      <ItemCounts CantStock={Item.stock} />
    </>
  );
}
export default ItemDetail;
