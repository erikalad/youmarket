/** @format */

import { Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import Auth from "./contenedores/auth";
import Verification from "./contenedores/verification";
import Acredit from "./contenedores/acredit";
import Home from "./contenedores/home";
import Awards from "./contenedores/awards";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/acredit" element={<Acredit />} />
        <Route path="/home" element={<Home />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </div>
  );
}

export default App;
