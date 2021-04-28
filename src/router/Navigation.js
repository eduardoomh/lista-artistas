import React  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { rutas } from "./router";

export default function Navigation() {

    return (
        <Router>
            <Link to="/">inicio</Link>
            <Link to="/lista">lista</Link>
            <Switch>
                {
                    rutas.map(ruta => (
                        <Route
                            key={ruta.path}
                            path={ruta.path}
                            exact={ruta.exact}
                            render={(props) => (
                                <ruta.layout>
                                    <ruta.component {...props} />
                                </ruta.layout>

                            )}
                        />
                        )

                    )         
                  
                }
            </Switch>
        </Router>
    )
}