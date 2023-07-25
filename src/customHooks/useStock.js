import { useState, useEffect } from "react";
import { useContext } from "react";
import { CarritoContext } from "../context/CartContext";

export const useStock = (Item) => {
  const [Stock] = useState(Item.stock);
  const [CantVenta, SetVenta] = useState(0);
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    carrito.forEach((element) => {
      if (element.id === Item.id) {
        SetVenta(element.cantidad);
      }
    });
  }, [carrito, Item.id]);

  const Suma = () => {
    SetVenta((CantVenta) => CantVenta + 1);
  };

  const Resta = () => {
    SetVenta((CantVenta) => CantVenta - 1);
  };

  return {
    Stock,
    CantVenta,
    Suma,
    Resta,
  };
};
