import { useEffect, useState } from "react";
//import datitos from "../data/datitos.json";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const useList = () => {
  const [Productos, SetProductos] = useState([]);
  const [Categorias, SetCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");
    getDocs(refCollection).then((snapshot) => {
      let auxProdcutos = [];
      if (snapshot.size !== 0) {
        snapshot.docs.map((doc) => {
          return auxProdcutos.push({ id: doc.id, ...doc.data() });
        });
      }
      SetProductos(auxProdcutos); // eslint-disable-next-line
    });
  }, []);
  useEffect(() => {
    let categorias = [];
    Productos.forEach((element) => {
      let aux = true;
      categorias.forEach((categoria) => {
        if (element.anime === categoria) {
          aux = false;
        }
      });
      if (aux) categorias.push(element.anime);
    });
    SetCategorias(categorias); // eslint-disable-next-line
    console.log(categorias); // eslint-disable-next-line
  }, []);
  return { Productos, Categorias };
};
