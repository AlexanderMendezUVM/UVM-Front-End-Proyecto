import estilos from "../css/Inicio.module.css";
import Logop from "../assets/Logop.png";
import Logogc from "../assets/Logo Grande Claro.png";
import Album from "../assets/Album de Muestra.png";
import { useEffect, useState } from "react";

export const Inicio = () => {
  const [token, setToken] = useState('');

  const getParamsHash =(hash) =>{
     const hashConten = hash.substr(1);
     const paramsSplit = hashConten.split('&');
     let params ={};
     let values =[];
     paramsSplit.forEach((param) => {
        values=param.split('=');
        params[values[0]]=values[1];
     });
     return params;
  }

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[token]);


  useEffect(()=>{
    if (window.location.hash){
      const hash = window.location.hash;
      const tokens = getParamsHash(hash);
      localStorage.setItem('token',tokens.access_token);
      setToken(tokens.access_token);
    }
  },[]);

  return (
    <div className={estilos.contenedor}>
        <div className={estilos.contenido}>
          <div className={estilos.izquierda}>
            <img src={Logogc} alt="" />
            <h3>Hola amante de la música, esto es MusicBlend</h3>
            <p>Nosotros te presentamos toda la música que te gusta en un solo lugar; revisa tus recomendaciones y empieza a descubrir. Cuanta más música busques, mejores recomendaciones obtendrás.</p>
            <h3>¿QUÉ ESPERAS?</h3>
              <h2 className={estilos.comienza}>¡COMIENZA YA!</h2>
          </div>
          <div className={estilos.derecha}>
            <img className={estilos.albumimg} src={Album} alt="" />
          </div>
      </div>
      <div className={estilos.footer}>
        <div className={estilos.textfooter}>
          <ul className={estilos.menu}>
            <li>Registrarse</li>
            <li>API de Desarrollo</li>
            <li>Sobre Nosotros</li>
          </ul>
          <div className={estilos.derechos}>
            TeamRTX © 2024 MusicBlend td. Todos los derechos reservados
          </div>
        </div>
        <img className={estilos.logoimg} src={Logop} alt="" />
      </div>
    </div>
  );
};
