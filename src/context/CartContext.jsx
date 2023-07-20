import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  let carritoAux = [];

  const isInCart = (Item) => {
    let aux = false;
    carrito.forEach((element) => {
      if (element.id === Item.id) {
        aux = true;
      }
    });
    return aux;
  };

  const addItem = (Item, CantVenta) => {
    if (!isInCart(Item)) {
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

  const removeItem = (Item) => {
    carritoAux.filter((element) => element.id !== Item.id);
    setCarrito(carritoAux);
  };

  const clear = () => {
    carritoAux = [];
    setCarrito(carritoAux);
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, isInCart, addItem, removeItem, clear }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
