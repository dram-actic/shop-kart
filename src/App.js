import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Newslleter from "./component/Newslleter";
import Footer from "./component/Footer";
import { useState } from "react";
import {
  GlobalContextProvider,
  MyContextProvider,
} from "./globalStates/GlobalState";

function App() {
  // const [state, setState] = useState("close");

  // const setNewState = (nState) => {
  //   setState(nState);
  // };

  return (
    <GlobalContextProvider>
      <Navbar />
      <Header />
      <Newslleter />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
