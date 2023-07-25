import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwd3ubETFxwqHIKS2tQxYWqqzSUGbrXDI",
  authDomain: "prueba-63cb5.firebaseapp.com",
  projectId: "prueba-63cb5",
  storageBucket: "prueba-63cb5.appspot.com",
  messagingSenderId: "288041207329",
  appId: "1:288041207329:web:df79f32cd1951f39078560",
  measurementId: "G-G7XDNZ4VZK",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
