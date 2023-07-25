import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

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
      setCarrito((prev) => [...prev, { ...Item, cantidad: CantVenta }]);
    } else {
      removeItem(Item.id);
      setCarrito((prev) => [...prev, { ...Item, cantidad: CantVenta }]);
    }
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((element) => element.id !== id));
  };

  const clear = () => {
    setCarrito([]);
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, isInCart, addItem, removeItem, clear }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
