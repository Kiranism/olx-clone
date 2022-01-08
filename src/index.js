import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext } from "./store/Context";
import firebase from "./Firebase/config";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
