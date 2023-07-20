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
  /*  const isInCart = () => {
    let aux = false;
    carrito.forEach((element) => {
      if (element.id === Item.id) {
        aux = true;
      }
    });
    return aux;
  };

  const addItem = () => {
    if (!isInCart()) {
      carritoAux.push({ ...Item, cantidad: CantVenta });
    } else {
      carritoAux.forEach((element) => {
        if (element.id === Item.id) {
          element.cantidad = CantVenta;
        }
      });
    }

    setCarrito(carritoAux);
  };

  const removeItem = () => {
    carritoAux.filter((element) => element.id !== Item.id);
    setCarrito(carritoAux);
  };

  const clear = () => {
    carritoAux = [];
    setCarrito(carritoAux);
  }; */

  return {
    Stock,
    CantVenta,
    Suma,
    Resta,
  };
};
