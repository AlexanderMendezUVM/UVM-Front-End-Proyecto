import estilos from "../css/Contacto.module.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

export function Contacto() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      fechaNacimiento: "",
      telefono: "",
      mensaje:"",
      aceptaTerminos: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("DATA RECIBIDA: ", data);
    emailjs.sendForm('service_w3go7gy', 'template_wrmlgpw', form.current, {
      publicKey: 'u33iL9Nz6m04rg6W1',
    })
    .then(
      () => {
        console.log('Correo Enviado Exitosamente!');
      },
      (error) => {
        console.log('Error...', error.text);
      },
    );
    console.log(data);
    reset();
  });

 
  return (
    <div className={estilos.contenedorform}>
    <form className={estilos.formulario} ref={form} onSubmit={onSubmit}>
      <div className={estilos.titulo}>
        <h2>Formulario de Contacto</h2>
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="fechaNacimiento"
          {...register("fechaNacimiento", {
            required: {
              value: true,
              message: "Fecha de nacimiento es requerida",
            },
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad =
                fechaActual.getFullYear() - fechaNacimiento.getFullYear();
              return edad >= 18 || "Debes ser mayor de edad";
            },
          })}
        />
        {errors.fechaNacimiento && (
          <span>{errors.fechaNacimiento.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="telefono">Telefono:</label>
        <input
          type="number"
          name="telefono"
          {...register("telefono")}
        />
        {errors.telefono && <span>{errors.telefono.message}</span>}
      </div>

      <div>
        <label  htmlFor="mensaje">Mensaje</label>
        <textarea
          name="mensaje"
          cols="30"
          rows="4"
          {...register("mensaje", {
            required: {
              value: true,
              message: "Mensaje es requerido",
            },
            maxLength: 200,
          })}
          />
      </div>

      <div className={estilos.terminos}>
        <input className={estilos.check}
          type="checkbox"
          name="aceptaTerminos"
          {...register("aceptaTerminos", {
            required: {
              value: true,
              message: "Acepta los términos y condiciones",
            },
          })}
        />
        <label className={estilos.textoterminos} >Acepto los términos y condiciones</label>
        {errors.aceptaTerminos && <span>{errors.aceptaTerminos.message}</span>}
      </div>
      <div className={estilos.enviar}>
          <button type="submit">Enviar</button>
      </div>
    </form>
    </div>
  );
}