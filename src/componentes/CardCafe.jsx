import React from 'react'

export default function CardCafe( {cardCafe, setTotal} ) {
    const comprar = (elemento) => {
        setTotal((e)=>e+Number(cardCafe.precio));
        elemento.target.parentNode.parentNode.style.display = "none";
    }
  return (
    <div className='card'>
        <img src="" alt="" />
        <h1>{cardCafe.nombre}</h1>
        <p>{cardCafe.descripcion}</p>
        <p>${cardCafe.precio}</p>
        <div className='boton'><button onClick={comprar} className="boton boton-cafe">Comprar</button></div>
    </div>
  )
}
