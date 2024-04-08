import estilos from "../css/Inicio.module.css";
import Logop from "../assets/Logop.png";
import Logogc from "../assets/Logo Grande Claro.png";
import Logogo from "../assets/Logo Grande Oscuro.png";
import Nav0 from "../assets/Nav0.png";
import Nav1 from "../assets/Nav1.png";
import Nav2 from "../assets/Nav2.png";
const delimitador = "%2C";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import audio from '../assets/track.mp3';

const clientID="cce29b73f12f4d66954024732c079412";
const clientSecret="d84d3fb14ff4486883ba6e95b17ba133";

//URL para obtener Token
const url_token = "https://accounts.spotify.com/api/token";

//URL para obtener Album de Artistas
const url_album = "https://api.spotify.com/v1/albums";

const idAlbunes = [
  "0rmhjUgoVa17LZuS8xWQ3v",
  "2eRJUtI7nXrQ5uYQ7tzTo9",
  "1qwlxZTNLe1jq3b0iidlue",
  "1ATL5GLyefJaxhQzSPVrLX",
  "3Qf4H3NYSp3BMIRe6WOyOA",
  "4kS7bSuU0Jm9LYMosFU2x5"
];



export const Inicio = ({dark}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [playBoop, {pause}] = useSound(audio, {
    volume: 0.1,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      playBoop();
    }
    setIsPlaying(!isPlaying);
  }

//  const [play] = useSound(audio, { volume: 0.1 });

  const [token, setToken] = useState('');
  const [exist, setExist] = useState(false);
  const [artistas, setArtistas] = useState();

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
    if (window.location.hash){
      const hash = window.location.hash;
      const tokens = getParamsHash(hash);
      localStorage.setItem('token',tokens.access_token);
      setToken(tokens.access_token);
    }
  },[]);

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
    console.log("TOKEN ALMACENADO EN LOCAL STORAGE:",localStorage.getItem('token'));
  },[]);

  async function generarToken(){
    var token2 = await fetch(url_token,{
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((r) => r.json())
    .then((r2) => {localStorage.setItem('tokenc',r2.access_token)});
  }
  
  async function buscar() {
    const listaAlbunes = idAlbunes.join(delimitador);
    var opcionesAlbum = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('tokenc')
      },
    };
    console.log("TOKEN_C RECIBIDO: ",localStorage.getItem('tokenc'));
    var albumsArtista = await fetch(`${url_album}?ids=${listaAlbunes}`,opcionesAlbum)
    .then((result2) => result2.json())
    .then((data2) => {setArtistas(data2.albums)}
    //.then((data2) => {console.log(data2);}
    );
    setExist(true);
  }
  
  useEffect(() => {
    generarToken();
    buscar();  
  },[]);


  return (
    <div className={dark ? estilos.contenedoro : estilos.contenedorc}>
      <div className={estilos.contenido}>
          <div className={estilos.izquierda}>
            <img className={estilos.logoimg} onClick={togglePlay} src={dark ? Logogo : Logogc} alt="" />
            <h3>Hola amante de la música, esto es MusicBlend</h3>
            <p>Nosotros te presentamos toda la música que te gusta en un solo lugar; revisa tus recomendaciones y empieza a descubrir. Cuanta más música busques, mejores recomendaciones obtendrás.</p>
            <h3>¿QUÉ ESPERAS?</h3>
            <Link to="/Login">
              <h2 className={estilos.comienza}>¡COMIENZA YA!</h2>
            </Link> 
          </div>
          {exist && (
          <div className={estilos.derecha}>
            <div className={estilos.contenedorslider}>
              <ul className={estilos.contenedoralbumimg}>
                {artistas.map((song, i) => (
                <li key={i} className={estilos.contenedorimg}>
                  <img className={estilos.albumimg}
                    style={{ width: "400px", height: "400px" }}
                  src={song.images[0].url}
                  />
                </li>
              // <a href={song.uri}>Play</a>
                ))}
                {artistas.map((song, i) => (
                <li key={i} className={estilos.contenedorimg}>
                  <img className={estilos.albumimg}
                    style={{ width: "400px", height: "400px" }}
                  src={song.images[0].url}
                  />
                </li>
              // <a href={song.uri}>Play</a>
                ))}
              </ul>
            </div>

            <div className={estilos.contenedorinfo}>
                <div className={estilos.info}>
                    <img className={estilos.imginfo} src={Nav0} alt="" />
                    <p className={estilos.mensajeinfo}>
                        Buscar información completa acerca de tus artistas favoritos
                    </p>
                </div>
                <div className={estilos.info}>
                    <img className={estilos.imginfo} src={Nav1} alt="" />
                    <p className={estilos.mensajeinfo}>
                        Mantenerte actualizado con los últimos lanzamientos
                    </p>
                </div>
                <div className={estilos.info}>
                    <img className={estilos.imginfo} src={Nav2} alt="" />
                    <p className={estilos.mensajeinfo}>
                        Encuentra el album que buscas con todos sus detalles
                    </p>
                </div>
            </div>
          </div>
          )}
      </div>
      <div className={estilos.footer}>
        <div className={estilos.textfooter}>
          <ul className={estilos.menu}>
            <Link to="/Login"><li className={estilos.linkfooter}>Contactanos</li></Link>
            <a href="https://developer.spotify.com/" target="_blank"><li className={estilos.linkfooter}>API de Desarrollo</li></a>
            <Link to="/Nosotros"><li className={estilos.linkfooter}>Sobre Nosotros</li></Link>
          </ul>
          <div className={estilos.derechos}>
            TeamRTX © 2024 MusicBlend td. Todos los derechos reservados
          </div>
        </div>
        <img className={estilos.logoimgfooter} src={Logop} alt="" />
      </div>
    </div>
  );
};
