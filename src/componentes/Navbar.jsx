import estilos from "../css/Navbar.module.css";
import Logop from "../assets/Logop.png";
import Dark from "../assets/Dark Mode.png";
import Iconmenu from "../assets/iconmenu.png";
import { Link } from "react-router-dom";
export const Navbar=()=> {
  return (
    <header className={estilos.navbar}>
      <Link to="/">
        <div className={estilos.logo}>
          <img className={estilos.logoimg} src={Logop} alt="" />
          <h3 className={estilos.logotext} >MusicBlend</h3>
        </div>
      </Link>
        <ul className={estilos.menu}>
            <li className={estilos.itemmenu}>Explorar</li>
            <li className={estilos.itemmenu}>Listas</li>
            <li className={estilos.itemmenu}>Top Artista</li>
            <li className={estilos.itemmenu}>Sobre Nosotros</li>
        </ul>
        <button className={estilos.iconomenu}>
              <img className={estilos.iconoimg} src={Iconmenu} alt=""/>
        </button>
        <div className={estilos.registro}>Registrate</div>
        <img className={estilos.modoimg} src={Dark} alt="" />
    </header>
  );
};
