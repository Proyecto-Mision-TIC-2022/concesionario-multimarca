import React, { useEffect, useState } from 'react';

//realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que diga si el usuario es mayor de edad o no

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014,
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2020,
  },
  {
    nombre: "Rav4",
    marca: "Toyota",
    modelo: 2021,
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2017,
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2020,
  },
  {
    nombre: "Chevrolet 3",
    marca: "Onix",
    modelo: 2020,
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextBoton] = useState("Crear un nuevo vehículo");
  
  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setVehiculos(vehiculosBackend)
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextBoton("Crear Nuevo Vehículo");
    } else {
      setTextBoton("Mostrar Todos los vehiculos");
    }
  }, [mostrarTabla]);
  return (
    <div>
      <h2>Página de administración de vehículos</h2>
      <button 
        onClick={()=>
          {setMostrarTabla(!mostrarTabla);
          }}
        className="buton-vehiculo"
      >
        {textoBoton}
        </button>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} /> 
      ): <FormularioCreacionVehiculos />}
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log("este es el listado de vehiculos en el componente de tabla", listaVehiculos);
  }, [listaVehiculos]);
  return (
    <div className="tabla">
      <h2>Todos los vehículos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del vehículo</th>
            <th>Marca del vehículo</th>
            <th>Modelo del vehículo</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

const FormularioCreacionVehiculos = () => {
  return (
    <div>
      <h2>Crear nuevo vehículo</h2>
      <form className="crear-vehiculo">
        <label className="nombre-vehiculo" htmlFor="nombre">
          Nombre del vehículo
          <input 
            name="nombre"
            className="columna-guardar" 
            type="text" 
            placeholder="Corolla" 
          />
        </label>
        <label className="marca-vehiculo"htmlFor="marca">
          Marca del vehículo
          <select name="marca">
            <option disabled>Seleccione una opcion</option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className="modelo-vehiculo" htmlFor="modelo">
          modelo del vehículo
          <input 
            name="modelo"
            className="columna-guardar" 
            type="number" 
            placeholder="2014" 
            min={1992}
            max={2022}
          />
        </label>
        <button className="boton-guardar">Guardar vehiculo</button>
      </form>
    </div>
  );
};

export default Vehiculos;

//``