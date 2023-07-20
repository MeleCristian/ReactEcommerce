import { useContext } from "react";
import { CarritoContext } from "../context/CartContext";
import { ItemCounts } from "./ItemCounts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Cart = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <Container>
      <Row className="border border-primary border-4">
        <Col xs={2} className=" border-primary border-end ">
          Imagen
        </Col>
        <Col xs={2} className=" border-primary border-end">
          Producto
        </Col>
        <Col xs={1} className=" border-primary border-end">
          Anime
        </Col>
        <Col xs={4} className=" border-primary border-end">
          Cantidad
        </Col>
        <Col xs={1} className=" border-primary border-end">
          Total
        </Col>
        <Col xs={2}>Eliminar</Col>
      </Row>
      {carrito.map((element) => {
        return (
          <Row key={element.id}>
            <Col xs={2} className=" border-primary border-end">
              <img src={element.imagen} alt="" />
            </Col>
            <Col xs={2} className=" border-primary border-end">
              {element.producto}
            </Col>
            <Col xs={1} className=" border-primary border-end">
              {element.anime}
            </Col>
            <Col xs={4} className=" border-primary border-end">
              <ItemCounts Item={element} key={element.id}></ItemCounts>
            </Col>
            <Col xs={1} className=" border-primary border-end">
              {element.cantidad * element.precio}
            </Col>
            <Col xs={2}>
              <Button variant="warning">Eliminar Producto</Button>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
