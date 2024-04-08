import { useEffect, useState } from "react";
import estilos from "../css/Listas.module.css";

//URL para obtener Mis Listas de Reproducción
const url_myListas = "https://api.spotify.com/v1/me/playlists";


export function Listas({dark}) {
  const [exist, setExist] = useState(false);
  const [albums, setAlbums] = useState();


async function buscar() {

  var opciones = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  };

  await fetch(url_myListas,opciones)
  .then(response => response.json())
  .then(response=>{
    setAlbums(response.items)
    console.log(response.items);
    if (response.items != undefined){
       setExist(true);
    }
  })
  .catch(err=>console.error(err))
}

useEffect(() => {
  buscar();
},[]);


//****************************************************** */
  return (
    <div className={dark ? estilos.contenedoro : estilos.contenedorc}>
      {exist && (
        <ul className={dark ? estilos.listadoo : estilos.listadoc}>
          {albums.map((song, i) => (
            <li key={i} className={dark ? estilos.tarjetao : estilos.tarjetac}>
              <img
                className={estilos.imgtarjeta}
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
       {!exist && (
          <div className={dark ? estilos.alertao : estilos.alertac} >
            <p>Debe Iniciar Sesión para ver las Listas de Reproduccion</p>
          </div>
       )} 
    </div>
  );
}
