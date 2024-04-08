import { useEffect, useState } from "react";
import estilos from "../css/Explorar.module.css";

//URL para obtener el ID de un Artista
const url_artista = "https://api.spotify.com/v1/search?q=";

//URL para obtener Album del Artista
const url_album = "https://api.spotify.com/v1/artists";


export function Explorar({dark}) {
  const [exist, setExist] = useState(false);
  const [albums, setAlbums] = useState();

 //********************************************************* */
  const [buscarInfo, setBuscarInfo] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(()=>{
    var token = localStorage.getItem('token');
    setAccessToken(token);
  },[]);


  useEffect(() => {
    buscar();
  }, [buscarInfo]);

  const evaluarCambios = ({ target }) => {
    setBuscarInfo(target.value);
  };

  async function buscar() {
    
    var opcionesArtista = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    //Obtener el ID del Artista
    var artistaID = await fetch(url_artista + buscarInfo + "&type=artist",opcionesArtista)
      .then((result1) => result1.json())
      .then((data1) => {return data1.artists.items[0].id}
    );
    
    if (artistaID){
      var opcionesAlbum = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      };
  
      //Obtener los Album del Artista
      var albumsArtista = await fetch(`https://api.spotify.com/v1/artists/${artistaID}/albums?market=ES&limit=25&offset=0`,opcionesAlbum)
        .then((result2) => result2.json())
        .then((data2) => {setAlbums(data2.items);}
      );
  
      setExist(true);
    } 
  }
  //****************************************************** */
  return (
    <div className={dark ? estilos.contenedoro : estilos.contenedorc}>
      <div className={dark ? estilos.busquedao : estilos.busquedac}>
        <h2 className={estilos.frase}>
          ENCUENTRA TODA ESA MÚSICA QUE ALEGRA TUS DÍAS
        </h2>
          <input
            className={estilos.inputbuscar}
            type="text"
            placeholder="Buscar"
            value={buscarInfo}
            onChange={evaluarCambios}
          />
      </div>
      {exist && (
        <ul className={dark ? `${estilos.listado} ${estilos.listadoo}` : `${estilos.listado} ${estilos.listadoc}`}>
          {albums.map((song, i) => (
            <li key={i} className={dark ? estilos.tarjetao : estilos.tarjetac}>
              <img
                className={estilos.imgtarjeta}
                style={{ width: "186px", height: "186px" }}
                src={song.images[0].url}
              />
              <div className={estilos.infotarjeta}>
                <h3 className={estilos.titulo}>{song.name}</h3>
                <h4 className={estilos.cantante}>
                  {song.release_date.substr(0,4)}
                </h4>
                <a href={song.uri}>Play</a>
                </div>
            </li>
          ))}
        </ul>
        )}
    </div>
  );
}
