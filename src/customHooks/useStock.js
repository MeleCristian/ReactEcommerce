import { useState } from "react";
import { useContext } from "react";
import { CartProvider } from "../context/CartContext";

export const useStock = (Item) => {
  const [Stock, SetStock] = useState(Item.stock);
  const [CantVenta, SetVenta] = useState(0);
  const { carrito } = useContext(CartProvider);

  const Suma = () => {
    SetVenta((CantVenta) => CantVenta + 1);
  };

  const Resta = () => {
    SetVenta((CantVenta) => CantVenta - 1);
  };

  const AgregarAlCarrito = () => {
    SetStock((Stock) => Stock - CantVenta);
    SetVenta(0);
    //setCarrito(Item);
    //console.log(carrito);
  };
  return { Stock, CantVenta, Suma, Resta, AgregarAlCarrito };
};
