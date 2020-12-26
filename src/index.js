import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ProductContextProvider } from "./DataContext/ProductContext";

ReactDOM.render(
  <>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </>,
  document.getElementById("root")
);
