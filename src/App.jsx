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
import { useState } from "react";

const App = () => {
  const [dark,setdark] = useState(false);
  const [menuo,setMenuo] = useState(true);
  function darklight(dark){
    setdark(!dark);
  }
  function abrirmenu(menuo){
    setMenuo(!menuo);
  }
  return (
    <div className={dark ? estilos.contenedoro : estilos.contenedorc}>
      <BrowserRouter>
        <Navbar dark={dark} cambiarmodo={(dark)=>darklight(dark)} menuo={menuo} cambiarmenu={(menuo)=>abrirmenu(menuo)} />
        <Routes>
          <Route path="/" element={<Inicio dark={dark} cambiarmodo={(dark)=>darklight(dark)}/>} />
          <Route path="/Login" element={<Login dark={dark} cambiarmodo={(dark)=>darklight(dark)}/>} />
          <Route path="/Contacto" element={<Contacto dark={dark} cambiarmodo={(dark)=>darklight(dark)} />} />
          <Route path="/Explorar" element={<Explorar dark={dark} cambiarmodo={(dark)=>darklight(dark)} />} /> 
          <Route path="/Listas" element={<Listas dark={dark} cambiarmodo={(dark)=>darklight(dark)}/>} /> 
          <Route path="/TopMusic" element={<TopMusic dark={dark} cambiarmodo={(dark)=>darklight(dark)} />} /> 
          <Route path="/Nosotros" element={<Nosotros dark={dark} cambiarmodo={(dark)=>darklight(dark)}/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
