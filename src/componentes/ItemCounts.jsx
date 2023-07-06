import Button from "react-bootstrap/Button";
import { useStock } from "./useStock";

export const ItemCounts = ({ CantStock }) => {
  const { Stock, CantVenta, Suma, Resta, AgregarAlCarrito } =
    useStock(CantStock);

  return (
    <>
      <Button variant="danger" onClick={Resta} disabled={CantVenta === 0}>
        -
      </Button>
      <span>{CantVenta}</span>
      <Button variant="primary" onClick={Suma} disabled={CantVenta === Stock}>
        +
      </Button>
      <Button
        variant="success"
        onClick={AgregarAlCarrito}
        disabled={Stock === 0 || CantVenta === 0}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
