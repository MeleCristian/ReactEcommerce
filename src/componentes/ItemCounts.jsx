import Button from "react-bootstrap/Button";
import { useStock } from "../customHooks/useStock";

export const ItemCounts = ({ Item }) => {
  const { Stock, CantVenta, Suma, Resta, addItem } = useStock(Item);

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
        onClick={addItem}
        disabled={Stock === 0 || CantVenta === 0}
      >
        Actualizar carrito
      </Button>
    </>
  );
};
