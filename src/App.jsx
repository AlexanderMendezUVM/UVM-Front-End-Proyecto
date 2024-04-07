import estilos from "./css/App.module.css";
import { Inicio } from "./componentes/Inicio.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar.jsx";
import { Login } from "./paginas/Login.jsx";
import { Explorar } from "./componentes/Explorar.jsx";

const App = () => {
  return (
    <div className={estilos.contenedor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Explorar" element={<Explorar />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
