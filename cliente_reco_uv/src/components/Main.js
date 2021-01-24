import React from "react";
import { Switch, Route } from "react-router-dom";


import InicioReco from '../pages/InicioReco';
import RegistroVisita from '../pages/RegistroVisita';
import RegistroDR from '../pages/RegistroDR';
import RegistroDE from '../pages/RegistroDE';
import Eventos from '../pages/Eventos';
import LoginReco from '../pages/LoginReco';

const Main = () => (

    <Switch>
        <Route exact path="/InicioReco" component={InicioReco} />
        <Route exact path="/RegistroVisita" component={RegistroVisita} />
        <Route exact path="/RegistroDR" component={RegistroDR} />
        <Route exact path="/RegistroDE" component={RegistroDE} />
        <Route exact path="/Eventos" component={Eventos} />
        <Route exact path="/LoginReco" component={LoginReco} />
    </Switch>

);

export default Main;
