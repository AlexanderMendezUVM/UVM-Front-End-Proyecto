import estilos from "../css/Login.module.css";
const clientID="cce29b73f12f4d66954024732c079412";
const clientSecret="d84d3fb14ff4486883ba6e95b17ba133";
const redirectURI = "http://localhost:5173";
const urlAUTH = "https://accounts.spotify.com/authorize";
const delimitador = "%20";
const scopes = [
  "user-top-read",
  "user-read-private",
  "user-library-read",
  "playlist-read-private"
];
const scopeParams =scopes.join(delimitador);

export const Login = () => {
  
  const inicio = (()=>{
    window.location=`${urlAUTH}?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&scope=${scopeParams}&response_type=token&shows?offset=0&limit=20`;
  })

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className={estilos.logincontenedor}>
     <div className={estilos.login}>
        <h1 className={estilos.acceso}>Acceso a Spotify</h1>
            <button className={estilos.boton} onClick={inicio}>Login</button>
      </div>
    </div>
  )
}
