import estilos from "./css/App.module.css";
import { Inicio } from "./componentes/Inicio.jsx";
import { TopMusic } from "./componentes/TopMusic.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar.jsx";
import { Login } from "./paginas/Login.jsx";
import { Explorar } from "./componentes/Explorar.jsx";
import { Listas } from "./componentes/Listas.jsx";
import { Nosotros} from "./componentes/Nosotros.jsx";
import { Contacto} from "./componentes/Contacto.jsx";

const App = () => {
  return (
    <div className={estilos.contenedor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Explorar" element={<Explorar />} /> 
          <Route path="/TopMusic" element={<TopMusic />} /> 
          <Route path="/Listas" element={<Listas />} /> 
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
