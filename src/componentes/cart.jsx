import { useContext, useState } from "react";
import { CarritoContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Cart = () => {
  let totalCompra = 0;
  const { carrito, removeItem, clear } = useContext(CarritoContext);
  const [comprador, setComprador] = useState({
    name: "",
    phone: "",
    email: "",
  });
  //-------------INICIO DE FUNCION DE COMPRA----------
  const finalizarCompra = () => {
    const compra = {
      buyer: comprador,
      items: carrito,
      total: totalCompra,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, compra).then(({ id }) => {
      alert(
        "felicidades " +
          comprador.name +
          " su pedido llegara en breve. Acuerdese abonar al repartidor por un total de " +
          totalCompra +
          ". Su numero de orden es: " +
          id +
          " . Esta sera requerida para la entrega de la compra. Muchas gracias"
      );
    });

    clear();
  };
  //----------FIN FUNCION DE COMPRA------------

  //--------INICIO FUNCION PARA ACTUALIZAR LOS VALORES DEL FORM----------
  const handleChange = (ev) => {
    setComprador((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };
  //---------FIN FUNCION FORM------------

  return carrito.length ? ( // MOSTRAR EL CARRITO
    <Container className="m-4">
      <h1>Carrito</h1>
      <Container className="border border-primary border-4 m-2">
        <Row className="border-primary border-bottom border-4">
          <Col xs={2} className=" border-primary border-end ">
            Imagen
          </Col>
          <Col xs={2} className=" border-primary border-end">
            Producto
          </Col>
          <Col xs={2} className=" border-primary border-end">
            Anime
          </Col>
          <Col xs={2} className=" border-primary border-end">
            Precio Individual
          </Col>
          <Col xs={1} className=" border-primary border-end">
            Cant
          </Col>
          <Col xs={1} className=" border-primary border-end">
            Total
          </Col>
          <Col xs={2}>Eliminar</Col>
        </Row>
        {carrito.map((element) => {
          totalCompra = totalCompra + element.precio * element.cantidad;
          return (
            <Row key={element.id} className="border-primary border-bottom">
              <Col xs={2} className=" border-primary border-end">
                <img
                  height={50}
                  width={100}
                  src={element.imagen}
                  alt={element.producto}
                />
              </Col>
              <Col xs={2} className=" border-primary border-end">
                {element.producto}
              </Col>
              <Col xs={2} className=" border-primary border-end">
                {element.anime}
              </Col>
              <Col xs={2} className=" border-primary border-end">
                {element.precio}
              </Col>
              <Col xs={1} className=" border-primary border-end">
                {element.cantidad}
              </Col>
              <Col xs={1} className=" border-primary border-end">
                {element.cantidad * element.precio}
              </Col>
              <Col xs={2}>
                <Button
                  variant="warning"
                  onClick={() => removeItem(element.id)}
                >
                  Eliminar Producto
                </Button>
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col xs={9} className="m-2">
            <Button variant="danger" onClick={clear}>
              Vaciar Carrito
            </Button>
          </Col>
          <Col className="text-bg-success p-3">Total: ${totalCompra}</Col>
        </Row>
      </Container>

      {/* INICIO FORMULARIO */}
      <h2>Informacion del Comprador</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={comprador.name}
            onChange={handleChange}
            name="name"
            placeholder="Pepito rodrigues"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={comprador.email}
            onChange={handleChange}
            name="email"
            placeholder="example@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTelefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            value={comprador.phone}
            onChange={handleChange}
            name="phone"
            placeholder="541140543975"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={finalizarCompra}
          type="button"
          disabled={
            comprador.name === "" ||
            comprador.email === "" ||
            comprador.phone === ""
          }
        >
          Terminar compra
        </Button>
      </Form>
    </Container>
  ) : (
    //MOSTRAR CARRITO VACIO
    <div className="m-5">
      No hay productos en el carrito, visite nuestro catalogo y agregue los
      productos q le gustaria comprar
    </div>
  );
};
