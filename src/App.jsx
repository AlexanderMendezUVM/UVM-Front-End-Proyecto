import estilos from "./css/App.module.css";
import { Inicio } from "./componentes/Inicio.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar.jsx";

const App = () => {
  return (
    <div className={estilos.contenedor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
