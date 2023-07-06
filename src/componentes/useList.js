import { useEffect, useState } from "react";
import datitos from "../data/datitos.json";

export const useList = () => {
  const [Productos, SetProductos] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datitos);
      }, 1000);
    });
    promesa.then((result) => SetProductos(result));
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
