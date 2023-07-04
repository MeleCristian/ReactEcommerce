import { useEffect, useState } from "react";

export const useList = () => {
  const [Productos, SetProductos] = useState([]);
  useEffect(() => {
    fetch("datitos.json")
      .then((response) => response.json())
      .then((datitos) => SetProductos(datitos));
  }, []);
  let Categorias = [];
  Productos.forEach((element) => {
    let aux = true;
    Categorias.forEach((categoria) => {
      if (element.anime === categoria) {
        aux = false;
      }
    });
    if (aux) Categorias.push(element.anime);
  });

  return { Productos, Categorias };
};
