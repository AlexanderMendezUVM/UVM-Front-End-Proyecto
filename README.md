Página Web Front End Unidad IV (Actividad 4.2) - por Alexander Méndez, Aaron Rosales, Jesús Delgado & José Barrios. Página Web basada en un clon de Spotify utilizando la API Spotify for Developers, y será una página que funcionara de manera individual (Es decir por cada usuario) Donde se conectará directamente con sus cuentas de Spotify.

¿Cómo se realizó? Primero se elaboró la maquetación de nuestra página (Sobre todo la Landing Page) utilizando el software Figma, para luego elaborar la página utilizando CSS, JSX (React y Vite) y hacer los llamados a la API. Para poder funcionar, hace falta tener cuenta tanto en Spotify como en la API y crear una nueva APP, para tener las keys correspondientes.

¿Cómo se utiliza? 
1: Descargue el código del repositorio.

2: Abra el proyecto en su editor de texto de preferencia (Por ejemplo, Visual Studio Code o Sublime).
3: Crear una cuenta en la api Spotify for Developers, luego crear una nueva app y con los datos obtenidos (Client ID y Client Secret) debe hacer un archivo en la raíz del proyecto llamado .env.local con la siguiente información:
VITE_CLIENTID= Su ID de cliente
VITE_CLIENTSECRET= Su ID secreto
VITE_REDIRECTURI = La dirección URI que asignó al crear la app.

4: Abra la terminal en el editor usando el comando CTRl+Shift+ñ para ejecutar el comando: npm install

5: Una vez instalado todos los paquetes, ejecute el comando: npm run dev.

6: Una vez ejecutada la aplicación, puede interactuar con nuestra página, empezando con la landing page donde agregamos un footer con información, un slider de algunos álbumes y con el detalle de que al darle click sobre el logo de Music Blend, se reproducirá una canción ya guardada y un botón llamado Comienza ya, donde podrás iniciar sesión con tu cuenta de Spotify. Luego con la barra de navegación donde se encuentran los atajos a Explorar, Listas, TopArtistas y Sobre nosotros.

7: En el botón “Contáctanos” podrá enviarnos sugerencias o cualquiera duda mediante un formulario que automáticamente nos lo envía a nuestro correo.
8: Apretando f12 y la opcion "Toggle Device Toolbar" puede probar el Responsive de la página, tanto para PC, Laptop, Tablet o Teléfono.

Link de Diseño en Figma 
https://www.figma.com/file/cYY27KoWaWbSLW83feucRz/MusicBlend-%2F-Spotfy-App?type=design&node-id=0%3A1&mode=design&t=SnWuowvgs6uibUZ5-1 

Link de Tablas de Responsabilidad en Notion (Iniciar Sesión para Visualizar)
https://www.notion.so/team/c2352325-0ffc-4476-86c0-b81ce0555e68/join 

Manual de Usuario
https://drive.google.com/file/d/1C83g-dFzupL9Y6hJkUVi9MQjcOO0mQjB/view?usp=sharing 
