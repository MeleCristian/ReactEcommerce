import Item from "./Item";
import Container from "react-bootstrap/Container";

function ItemList({ List }) {
  return (
    <Container className="d-flex flex-wrap mt-5">
      {List.map((producto) => (
        <Item Item={producto} key={producto.id} />
      ))}
    </Container>
  );
}

export default ItemList;
