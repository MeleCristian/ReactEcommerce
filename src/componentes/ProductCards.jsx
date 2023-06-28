import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import datitos from "../data/datitos.json";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ItemCounts } from "./ItemCounts";

function ProductCards() {
  const [productos, SetProductos] = useState([]);
  /* useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(datitos), 1000);
    });
    promise.then((products) => SetProductos(products));
    fetch(datitos)
      .then((response) => response.json())
      .then((datitos) => SetProductos(datitos));
  }, []); */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(datitos);
        const data = await response.json();
        SetProductos(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="d-flex flex-wrap mt-5">
      {productos.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id} className="m-1">
          <Card.Img variant="top" src={item.imagen} style={{ height: 150 }} />
          <Card.Body>
            <Card.Title>{item.producto}</Card.Title>
            <Card.Text>Precio: ${item.precio}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Anime: {item.anime}</ListGroup.Item>
            <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <ItemCounts CantStock={item.stock} />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default ProductCards;
