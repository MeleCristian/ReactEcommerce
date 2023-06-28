import Button from "react-bootstrap/Button";
import { useState } from "react";

export const ItemCounts = ({ CantStock }) => {
  const [Stock, SetStock] = useState(CantStock);
  const [CantVenta, SetVenta] = useState(0);

  const Suma = () => {
    SetVenta((CantVenta) => CantVenta + 1);
  };

  const Resta = () => {
    SetVenta((CantVenta) => CantVenta - 1);
  };

  const AgregarAlCarrito = () => {
    SetStock((Stock) => Stock - CantVenta);
    SetVenta(0);
  };

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
      <span>{Stock}</span>
    </>
  );
};
