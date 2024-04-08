import { useEffect, useState } from "react";
import estilos from "../css/TopMusic.module.css";
import { useDebounce } from "../utilidades/useDebounce.jsx";

//URL para obtener el ID de un Artista
const url_artista = "https://api.spotify.com/v1/search?q=";



export function TopMusic({dark}) {
  const [exist, setExist] = useState(false);
  const [albums, setAlbums] = useState([]);

 //********************************************************* */
  const [buscarInfo, setBuscarInfo] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const debounceValue = useDebounce(buscarInfo, 300);

  useEffect(()=>{
    var token = localStorage.getItem('token');
    setAccessToken(token);
  },[accessToken]);


  useEffect(() => {
    buscar();
  }, [debounceValue]);

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
    console.log("Opc Artista: ",accessToken);
    //Obtener el ID del Artista
    var artistaID = await fetch(url_artista + buscarInfo + "&type=artist",opcionesArtista)
      .then((result1) => result1.json())
      .then((data1) => {return data1.artists.items[0].id}
    );
    
    if (artistaID){
      console.log("Artista ID: " + artistaID);
      var opcionesTop = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      };
  
      //Obtener El Top-Tracks del Artista
      var albumsArtista = await fetch(`https://api.spotify.com/v1/artists/${artistaID}/top-tracks?market=ES&limit=25&offset=0`,opcionesTop)
        .then((result2) => result2.json())
        .then((data2) => {setAlbums(data2.tracks);}
      );
      setExist(true);
    } 
  }
  //****************************************************** */
  return (
    <div className={dark ? estilos.contenedoro : estilos.contenedorc}>
      <div className={dark ? estilos.busquedao : estilos.busquedac}>
        <h2 className={estilos.frase}>
          ENCUENTRA EL TOP DE CANCIONES DE TU ARTISTA FAVORITO
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
        <ul className={dark ? estilos.listadoo : estilos.listadoc}>
          {albums.map((song, i) => (
            <li key={i} className={dark ? estilos.tarjetao : estilos.tarjetac}>
              <img
                className={estilos.imgtarjeta}
                style={{ width: "186px", height: "186px" }}
                src={song.album.images[0].url}
              />
              <div className={estilos.infotarjeta}>
                <h3 className={estilos.titulo}>{song.name}</h3>
                <h4 className={estilos.cantante}>
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
