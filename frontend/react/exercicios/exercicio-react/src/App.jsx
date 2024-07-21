import { useState } from "react";
// import Main from "./components/Main";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

function App() {
  //? const [count, setCount] = useState(0);
  useState(0);

  return (
    // <>
    //   <Main />
    // </>
    <div className="app">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
