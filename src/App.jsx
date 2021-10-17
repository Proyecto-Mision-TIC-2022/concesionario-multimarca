import AuthLayout from "../src/layouts/AuthLayout";
import PrivateLayout from "../src/layouts/PrivateLayout";
import PublicLayout from "../src/layouts/PublicLayout";
import Admin from "../src/pages/admin/Index";
import Clientes from "../src/pages/admin/Clientes";
import Vehiculos from "../src/pages/admin/Vehiculos";
import Index from "../src/pages/Index";
import Login from "../src/pages/Login";
import Registro from "../src/pages/Registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/styles/styles.css";

function App() {
  return (
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
        <Route path={["/login","/registro"]}>
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
 );
}
export default App;
