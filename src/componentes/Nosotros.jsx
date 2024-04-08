import estilos from "../css/Nosotros.module.css";
import Alexander from "../assets/Alexander.png";
import Aaron from "../assets/Aaron.png";
import Jesus from "../assets/Jesus.png";
import Jose from "../assets/Jose.png";
import Logogc from "../assets/Logo Grande Claro.png";

export function Nosotros({dark}) {
  return (
    <div className= {dark ? estilos.contenedoro : estilos.contenedorc}>
        <div className={dark ? estilos.cuerpoo : estilos.cuerpoc}>
            <img className={estilos.logogrande} src={Logogc} alt=""/>
            <h2 className={estilos.equipo}>
                NUESTRO EQUIPO
            </h2>
            <h3 className={estilos.carrera}>
              Estudiantes de Ingeniería en Computacion del 5to Trimestre UVM
            </h3>
            <div className={estilos.integrantes}>
              <div className={estilos.infointegrantes}>
                <img className={estilos.foto} src={Alexander} alt="" />
                <h3>Alexander Mendez</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <img className={estilos.foto} src={Aaron} alt="" />
                <h3>Aaron Rosales</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <img className={estilos.foto} src={Jesus} alt="" />
                <h3>Jesus Delgado</h3>
              </div>
              <div className={estilos.infointegrantes}>
                <img className={estilos.foto} src={Jose} alt="" />
                <h3>Jose Barrios</h3>
              </div>
            </div>
            <p className={estilos.texto}>
            En nuestra aplicación, nos apasiona conectar a los amantes de la música con las melodías perfectas para cada ocasión. Con un enfoque en la diversidad musical y la facilidad de uso, nuestro equipo se esfuerza por brindar una experiencia única y personalizada a cada usuario. Desde descubrir nuevas canciones hasta crear listas de reproducción personalizadas, estamos aquí para hacer que tu experiencia musical sea inolvidable.
            </p>
            
            <p className={estilos.texto}> 
            Nuestra misión es convertir la búsqueda de música en una experiencia emocionante y enriquecedora. Con algoritmos inteligentes y una amplia base de datos, nuestra aplicación te ofrece recomendaciones musicales precisas y relevantes. Ya sea que busques relajarte, motivarte o simplemente disfrutar de buena música, estamos aquí para ayudarte a encontrar la banda sonora perfecta para tu vida.
            </p>
        </div>
    </div>
  )
}