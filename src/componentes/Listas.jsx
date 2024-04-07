import { useEffect, useState } from "react";
import estilos from "../css/Listas.module.css";

//URL para obtener Mis Listas de Reproducción
const url_myListas = "https://api.spotify.com/v1/me/playlists";


export function Listas() {
  const [exist, setExist] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [buscarInfo, setBuscarInfo] = useState("");
  const [accessToken, setAccessToken] = useState("");

 /*  useEffect(()=>{
    var token = localStorage.getItem('token');
    setAccessToken(accessToken);
  },[]); */


  useEffect(() => {
    buscar();
    setExist(true);
  }, []);

  async function buscar() {
    var opciones = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    var albumsArtista = await fetch(url_myListas,opciones)
    .then((result2) => result2.json())
    .then((data2) => {setAlbums(data2.items);}
    //.then((data2) => {console.log("Muestra: ",data2);}
    );
}
  //****************************************************** */
  return (
    <div className={estilos.contenedor}>
      {exist && (
        <ul className={estilos.listado}>
          {albums.map((song, i) => (
            <li key={i} className={estilos.tarjeta}>
              <img
                className={estilos.imgtarjeta}
                style={{ width: "80px", height: "80px" }}
                src={song.images[0].url}
              />
              <div className={estilos.infotarjeta}>
                <h3 className={estilos.nombre}>{song.name}</h3>
                <a className={estilos.play} href={song.uri}>Play</a>
              </div>
            </li>
          ))}
        </ul>
        )}
    </div>
  );
}
