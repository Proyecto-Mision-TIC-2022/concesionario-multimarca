import React from 'react';
import Google from "../media/google_logo.png";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="login-center">
      <h2 className="titulo">Inicia sesión en tu cuenta</h2>
      <form className="formulario">
        <div>
          <input className="campo" type="email" placeholder="Correo Electrónico" required />
          <input className="campo-dos" type="password" placeholder="Contraseña"  required />
        </div>
        <div className="recu">
          <div>
            <label htmlFor="recuerdame">
              <input type="checkbox" name="recuerdame" />
              Recuerdame
            </label>
          </div>
        <div>
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        </div>
        <div>
          <Link to="/admin">
            <button type="submit">Iniciar Sesión</button>
          </Link>
        </div>
        <div>
          O
        </div>
        <div>
          < img src={Google} alt="Logo Google" className="google" />
          <button>Continua con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
