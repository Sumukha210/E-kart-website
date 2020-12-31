import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { RootReducer } from "./Redux/Reducers/index";

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
