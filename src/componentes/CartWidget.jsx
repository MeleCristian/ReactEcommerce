import imagen from "../assets/cart.png";
import { useContext } from "react";
import { CarritoContext } from "../context/CartContext";

const style = {
  img: {
    height: "2rem",
    width: "auto",
  },
  span: {
    color: "white",
    paddingLeft: 5,
  },
};
export const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  let cant = 0;
  carrito.forEach((element) => {
    cant = cant + element.cantidad;
  });

  return (
    <>
      <img src={imagen} style={style.img} alt="" />
      <span style={style.span}>{cant}</span>
    </>
  );
};
