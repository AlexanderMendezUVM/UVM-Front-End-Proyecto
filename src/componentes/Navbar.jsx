import estilos from "../css/Navbar.module.css";
import Logop from "../assets/Logop.png";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";


export const Navbar=({dark, cambiarmodo, menuo, cambiarmenu})=> {
  return (
    <header className={dark ? `${estilos.navbar} ${estilos.navbaro}` : `${estilos.navbar} ${estilos.navbarc}`}>
      <Link to="/">
        <div onClick={()=>cambiarmenu(false)} className={estilos.logo}>
          <img className={estilos.logoimg} src={Logop} alt="" />
          <h3 className={dark ? estilos.logotexto : estilos.logotextc} >MusicBlend</h3>
        </div>
      </Link>
        <ul onClick={()=>cambiarmenu(false)} className={menuo ? estilos.menu : estilos.menusmall}>
            <Link to="/Explorar"><li className={dark ? `${estilos.itemmenu} ${estilos.itemmenuo}` : `${estilos.itemmenu} ${estilos.itemmenuc}`}>Explorar</li></Link>
            <Link to="/Listas"><li className={dark ? `${estilos.itemmenu} ${estilos.itemmenuo}` : `${estilos.itemmenu} ${estilos.itemmenuc}`}>Listas</li></Link> 
            <Link to="/TopMusic"><li className={dark ? `${estilos.itemmenu} ${estilos.itemmenuo}` : `${estilos.itemmenu} ${estilos.itemmenuc}`}>Top Artista</li></Link>
            <Link to="/Nosotros"><li className={dark ? `${estilos.itemmenu} ${estilos.itemmenuo}` : `${estilos.itemmenu} ${estilos.itemmenuc}`}>Sobre Nosotros</li></Link>
        </ul>
        <button onClick={()=>cambiarmenu(menuo)} className={estilos.botonmenu}>
          {menuo ?
            <MdMenu size="2.2em" className={dark ? estilos.modomenuo : estilos.modomenuc}/>
            :
            <MdClose size="2.2em" className={dark ? estilos.modomenuo : estilos.modomenuc}/>
          }
        </button>
        <Link to="/Contacto">
          <div className={estilos.contacto}>Contactanos</div>
        </Link>
        <button onClick={()=>cambiarmodo(dark)} className={estilos.botonmodo}>
          {dark ?
            <MdLightMode size="2.2em" className={estilos.modoimgc}/>
            :
            <MdDarkMode size="2.2em" className={estilos.modoimgo} />
          }
        </button>

    </header>
  );
};
