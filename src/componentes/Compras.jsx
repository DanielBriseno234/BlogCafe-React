import React from 'react'
import {useState} from 'react'
import CardCafe from './CardCafe';
import compras from "../img/compras.jpg"

export default function Compras() {
  const datos = [
    { nombre: "Café Artesanal",
      descripcion: "Café creado 100% por manos mexicanas, aplicando el mejor sabor.",
      precio: 99 },
    { nombre: "Café de grano",
      descripcion: "Café realizado con granos, otorgando un exquisito sabor",
      precio: 65 },
    { nombre: "Café Especial",
      descripcion: "Café diseñado para gente exigente",
      precio: 89 },
      {nombre: "Café Espiral",
      descripcion: "Café con diseño creativo y un toque de nuez",
      precio: 119 }
  ];

  const [total, setTotal] = useState(0);
  
  return (
    <>
    <div>
        <h1 className='centrar-texto'>Compras</h1>
        <div className='imagen formatoImg'></div>
      </div>
    <div className='contenedor'>
      <div className='centrar-texto'>
        <h2>Productos Disponibles</h2>
        <h3>Total a pagar: ${total}</h3>
      </div>

      
      <div className='caja-cards'>
      <CardCafe cardCafe = {datos[0]} setTotal = {setTotal}/>
      <CardCafe cardCafe = {datos[1]} setTotal = {setTotal}/>
      <CardCafe cardCafe = {datos[2]} setTotal = {setTotal}/>
      <CardCafe cardCafe = {datos[3]} setTotal = {setTotal}/>
      </div>
    </div>

    </>
  )
}
