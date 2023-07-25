import Button from "react-bootstrap/Button";
import { useStock } from "../customHooks/useStock";
export const ItemCounts = ({ Item, onAdd }) => {
  const { Stock, CantVenta, Suma, Resta } = useStock(Item);
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
        onClick={() => onAdd(CantVenta)}
        disabled={CantVenta === 0}
      >
        Actualizar carrito
      </Button>
    </>
  );
};
