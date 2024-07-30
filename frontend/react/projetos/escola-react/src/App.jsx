// import { useState } from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store";
import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import RoutesApp from "./routes";
function App() {
  // useState(0);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <RoutesApp />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className={"toast-container"} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
