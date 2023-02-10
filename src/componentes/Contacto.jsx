import React from 'react'
import { useForm } from 'react-hook-form';

export default function Contacto() {
    const {register, handleSubmit, formState:{errors}, resetField} = useForm();

    const guardar = (e) => {
        resetField('nombre');
        resetField('email');
        resetField('tel');
        resetField('comentario');
        alert("Formulario enviado");
    }


  return (
    <>
        <div className='contacto'>
            <div className='formulario contenedor'>
                <h1 className='centrar-texto'>Contactanos</h1>
                <form onSubmit={handleSubmit(guardar)}>
                    <div className='cajaForm'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id='nombre' name='nombre' {...register('nombre' , {required:true})}></input>
                        {errors.nombre?.type === "required" && <div className='er'>Nombre Obligatorio</div>}
                    </div>
                    <div className='cajaForm'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' name='email' {...register('email', {required:true, pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}></input>
                        {errors.email?.type === "pattern" && <div className='er'>Correo invalido</div>}
                        {errors.email?.type === "required" && <div className='er'>Introduce un correo</div>}
                    </div>
                    <div className='cajaForm'>
                        <label htmlFor="tel">Telefono:</label>
                        <input type="text" name='tel' id='tel' {...register('tel', {required: true, minLength: 10})}></input>
                        {errors.tel?.type === "minLength" && <div className='er'>Número invalido</div>}
                        {errors.tel?.type === "required" && <div className='er'>Ingresa un número de teléfono</div>}
                    </div>
                    <div className='cajaForm'>
                        <label htmlFor="comentario">Comentario:</label>
                        <input type="textarea"  id='comentario' name='comentario' {...register('comentario', {required:true})}></input>
                        {errors.comentario?.type === "required" && <div className='er'>Introduce tu comentario</div>}
                    </div>
                    
                    <input type="submit" value="Enviar" className='boton boton-cafe' />
                   
                </form>
            </div>
        </div>
        

    </>
  )
}
