import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { locationReducer } from "./store/reducers";
const rootReducer = combineReducers({
  location: locationReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
