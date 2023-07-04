import { useState } from "react";

export const useStock = (CantStock) => {
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
  return { Stock, CantVenta, Suma, Resta, AgregarAlCarrito };
};
