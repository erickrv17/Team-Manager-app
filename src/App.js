import React from "react";
import { Provider } from "react-redux";
import Players from "./components/Players";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Team Manager</h1>
      <Players />
    </main>
  </Provider>
);

export default App;
