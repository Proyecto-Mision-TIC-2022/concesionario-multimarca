import AuthLayout from "../src/layouts/AuthLayout";
import PrivateLayout from "../src/layouts/PrivateLayout";
import PublicLayout from "../src/layouts/PublicLayout";
import Admin from "../src/pages/admin/Index";
import Clientes from "../src/pages/admin/Clientes";
import Vehiculos from "../src/pages/admin/Vehiculos";
import Index from "./pages/auth/Index";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/styles/styles.css";
import {DarkModeContext} from "./context/darkMode";
import { useEffect, useState } from "react/cjs/react.development";



function App() {
  const [darkMode, setDarkMode] = useState(false);
    useEffect (() => {
      console.log("modo dark:" ,darkMode);
    }, [darkMode]);
    
    return (
      <div className="App">
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <Router>
            <Switch>
              <Route path={["/admin", "/admin/vehiculos", "/admin/clientes"]}>
                <PrivateLayout>
                  <Switch>
                    <Route path="/admin/vehiculos">
                      <Vehiculos />
                    </Route>
                    <Route path="/admin/clientes">
                      <Clientes />
                    </Route>
                    <Route path="/admin">
                      <Admin />
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>
              <Route path={["/login", "/registro"]}>
                <AuthLayout>
                  <Switch>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/registro">  
                      <Registro />
                    </Route>
                  </Switch>
                </AuthLayout>
              </Route>
              <Route path={["/"]}>
                <PublicLayout>
                  <Switch>
                    <Route path="/">
                      <Index />
                    </Route>
                  </Switch>
                </PublicLayout>
              </Route>
            </Switch>
          </Router>
        </DarkModeContext.Provider>
     </div>
  );
}
export default App;
