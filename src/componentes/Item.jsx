import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { NavLink } from "react-router-dom";

function Item({ Item }) {
  return (
    <>
      <Card style={{ width: "18rem" }} key={Item.id} className="m-1">
        <Card.Img variant="top" src={Item.imagen} style={{ height: 150 }} />
        <Card.Body>
          <Card.Title>{Item.producto}</Card.Title>
          <Card.Text>Precio: ${Item.precio}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Anime: {Item.anime}</ListGroup.Item>
          <ListGroup.Item>Stock: {Item.stock}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <NavLink
            variant="outline-info"
            to={`/productos/${Item.id}`}
            className="btn btn-info"
          >
            Info
          </NavLink>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
