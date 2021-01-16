import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import InicioReco from './pages/InicioReco';
import RegistroVisita from './pages/RegistroVisita';
import RegistroDR from './pages/RegistroDR';
import RegistroDE from './pages/RegistroDE';
import Eventos from './pages/Eventos';
import LoginReco from './pages/LoginReco';
import VistaRapida from './pages/VistaRapida';
import Actividades from './pages/Actividades';
import Inventario from './pages/Inventario';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        {/*<InicioReco />*/}
        {/*<RegistroVisita>*/}
        {/*<RegistroDR/>*/}
        {/*<RegistroDE/>*/}
        {/*<LoginReco/>*/}
        {/*<Eventos/>*/}
        <VistaRapida/>
        {/*<Inventario/>*/}
        {/*<Actividades/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
