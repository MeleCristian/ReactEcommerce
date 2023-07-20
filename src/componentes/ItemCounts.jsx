import Button from "react-bootstrap/Button";
import { useStock } from "../customHooks/useStock";
import { useContext } from "react";
import { CarritoContext } from "../context/CartContext";

export const ItemCounts = ({ Item }) => {
  const { Stock, CantVenta, Suma, Resta } = useStock(Item);
  const { addItem } = useContext(CarritoContext);

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
        onClick={addItem(Item, CantVenta)}
        disabled={CantVenta === 0}
      >
        Actualizar carrito
      </Button>
    </>
  );
};
