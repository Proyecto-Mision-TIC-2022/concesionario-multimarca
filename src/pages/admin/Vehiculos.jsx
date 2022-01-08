import React, { useEffect, useState } from 'react';

const Vehiculos = () => {
  const [nombreVehiculo , setNombreVehiculo] = useState("");
  
  useEffect(() => {
    console.log(
      "Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza porque tiene el array de dependencias vacío"
    );
    //paso 2
    //paso 3
    //paso 4
  },[]);   //una función que se ejecuta al inicio de la renderización del código

  useEffect(() => {
    console.log("Esto es una funcion que se ejecuta cada que cambia el valor de nombrevehiculo");
    console.log("el valor de la variable es ", nombreVehiculo);
  }, [nombreVehiculo]); //una funcion que se ejecuta cada que una variable cambia

  // useEffect(() => {
  //   console.log("este es un use effect que se ejecuta SIEMPRE que cambia una variable");
  //}); se explica solo para que sepan que existe, pero no se debe usar. 

 const enviarDatosAlBackend = ()=>{
   console.log("El valor de la variable nombreVehiculo es ", nombreVehiculo);
 }

  return (
    <form className='flex flex-col'>
      <h2>Formulario de Creación de vehículos</h2>
      <input 
        onChange={(e)=> {
          setNombreVehiculo(e.target.value);
        }} 
        type="text"
        placeholder="Nombre del vehículo"
      />
      <input 
        onChange={(e)=> {
          console.log(e.target.value);
        }}      
        type="text" 
        placeholder="Marca del vehículo"
      />
      <input type="text" placeholder="Modelo del vehículo"/>
      <button type="button" onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  );
};    //funciones que se ejecutan cada que yo hago cambios en un input o cada que le hago click a un buton

export default Vehiculos;
